import { Box, Button } from '@mantine/core';
import Link from 'next/link';

import classes from './PopularDocs.module.css';

export const PopularDocs = () => {
  return (
    <Box className={classes.container}>
      <Link href="/docs/getting-started/usage" legacyBehavior>
        <Button size="xl" fullWidth variant="gradient">
          Usage
        </Button>
      </Link>
      <Link href="/docs/api/table-options" legacyBehavior>
        <Button size="xl" fullWidth variant="gradient">
          Table Options
        </Button>
      </Link>
      <Link href="/docs/examples/editing-crud" legacyBehavior>
        <Button size="xl" fullWidth variant="gradient">
          CRUD Examples
        </Button>
      </Link>
      <Link href="/docs/examples/react-query" legacyBehavior>
        <Button size="xl" fullWidth variant="gradient">
          Fetching Examples
        </Button>
      </Link>
      <Link href="/docs/guides/localization" legacyBehavior>
        <Button size="xl" fullWidth variant="gradient">
          Localization
        </Button>
      </Link>
      <Link href="/docs/guides/data-columns" legacyBehavior>
        <Button size="xl" fullWidth variant="gradient">
          Create Columns
        </Button>
      </Link>
      <Link href="/docs/guides/column-filtering" legacyBehavior>
        <Button size="xl" fullWidth variant="gradient">
          Column Filtering
        </Button>
      </Link>
      <Link href="/docs/guides/row-selection" legacyBehavior>
        <Button size="xl" fullWidth variant="gradient">
          Row Selection
        </Button>
      </Link>
    </Box>
  );
};
