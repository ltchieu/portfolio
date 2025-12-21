import { useEffect, useMemo, useState } from 'react';
import { Box } from '@mui/material';
import { ActivityCalendar, type Activity } from 'react-activity-calendar';
import axios from 'axios';

type GithubContributionsApiResponse = {
  total: Record<string, number>;
  contributions: Array<Activity>;
};

type Props = {
  username?: string;
};

const DEFAULT_USERNAME = 'ltchieu';

const generateEmptyLastYearData = (): Array<Activity> => {
  const today = new Date();
  today.setUTCHours(0, 0, 0, 0);

  const start = new Date(today);
  start.setUTCDate(start.getUTCDate() - 364);

  const result: Array<Activity> = [];
  const cursor = new Date(start);
  for (let i = 0; i < 365; i += 1) {
    result.push({
      date: cursor.toISOString().slice(0, 10),
      count: 0,
      level: 0,
    });
    cursor.setUTCDate(cursor.getUTCDate() + 1);
  }

  return result;
};

const GithubActivityCalendar = ({ username = DEFAULT_USERNAME }: Props) => {
  const [data, setData] = useState<Array<Activity>>(() => generateEmptyLastYearData());
  const [loading, setLoading] = useState(true);

  const apiUrl = useMemo(() => {
    const safeUsername = encodeURIComponent(username.trim());
    return `https://github-contributions-api.jogruber.de/v4/${safeUsername}?y=last`;
  }, [username]);

  useEffect(() => {
    const controller = new AbortController();

    const run = async () => {
      try {
        setLoading(true);
        const res = await axios.get<GithubContributionsApiResponse>(apiUrl, {
          signal: controller.signal,
        });

        const json = res.data;
        if (!Array.isArray(json.contributions) || json.contributions.length === 0) return;

        setData(json.contributions);
      } catch (err) {
        if (controller.signal.aborted) return;

        if (axios.isAxiosError(err) && err.code === 'ERR_CANCELED') return;
      } finally {
        setLoading(false);
      }
    };

    run();

    return () => controller.abort();
  }, [apiUrl]);

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        paddingTop: 8,
        paddingBottom: 8,
        // scale up the calendar for a larger appearance
        '& .react-activity-calendar': {
          transform: 'scale(1.35)',
          transformOrigin: 'center top',
          maxWidth: 980,
        },
        '& .react-activity-calendar__footer': {
          fontFamily: '"PT Mono", monospace',
          color: 'rgba(255,255,255,0.85)',
        },
        '& .react-activity-calendar__count': {
          fontFamily: '"PT Mono", monospace',
        },
        '& .react-activity-calendar__legend-colors': {
          fontFamily: '"PT Mono", monospace',
        },
        '& svg text': {
          fontFamily: '"PT Mono", monospace',
        },
      }}
    >
      <ActivityCalendar
        data={data}
        loading={loading}
        colorScheme="light"
        labels={{
          totalCount: '{{count}} contributions in the last year',
          legend: { less: 'Less', more: 'More' },
        }}
        theme={{
          light: [
            '#ffffff',
            'rgba(199,112,240,0.20)',
            'rgba(199,112,240,0.38)',
            'rgba(199,112,240,0.62)',
            '#c770f0',
          ],
        }}
        showWeekdayLabels={false}
        showMonthLabels
        showColorLegend
        showTotalCount
      />
    </Box>
  );
};

export default GithubActivityCalendar;
