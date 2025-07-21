import '@docsearch/css';
import { DocSearch } from '@docsearch/react';
import {
  ActionIcon,
  AppShell,
  Box,
  Burger,
  Flex,
  Select,
  Text,
  Tooltip,
  useComputedColorScheme,
  useMantineColorScheme,
  useMantineTheme,
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import {
  IconBrandDiscord,
  IconBrandGithub,
  IconMoon,
  IconMoonStars,
  IconSun,
} from '@tabler/icons-react';
import cx from 'clsx';
import { getPrimaryColor } from 'mantine-react-table';
import { usePlausible } from 'next-plausible';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import classes from './TopBar.module.css';

interface Props {
  navOpen: boolean;
  setNavOpen: (navOpen: boolean) => void;
}

export const TopBar = ({ navOpen, setNavOpen }: Props) => {
  const { pathname } = useRouter();
  const plausible = usePlausible();
  const isMobile = useMediaQuery('(max-width: 600px)');
  const isTablet = useMediaQuery('(max-width: 900px)');
  const isDesktop = useMediaQuery('(min-width: 1500px)');
  const theme = useMantineTheme();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  const isLightTheme = colorScheme === 'light';
  const computedColorScheme = useComputedColorScheme(
    isLightTheme ? 'light' : 'dark',
    { getInitialValueInEffect: true },
  );

  return (
    <>
      <AppShell.Header className={classes['app-shell-header']}>
        <Flex align="center" gap="md">
          {(!isDesktop || pathname === '/') && (
            <Burger
              color="white"
              opened={navOpen}
              onClick={() => setNavOpen(!navOpen)}
              title="Open nav menu"
            />
          )}
          <Link href="/" passHref>
            <Text
              c="white"
              style={{
                alignItems: 'center',
                cursor: 'pointer',
                display: 'flex',
                fontSize: '24px',
                gap: '16px',
                transition: 'color 0.2s ease',
              }}
              component="h1"
            >
              <Image
                alt="MRT logo"
                src={`/mrt_logo.svg`}
                height={isTablet ? 35 : 45}
                width={isTablet ? 35 : 45}
              />
              {!isMobile && 'Mantine React Table'}
            </Text>
          </Link>
          <Select
            data={[
              { value: 'www.mantine-react-table.com', label: 'V1' },
              { value: 'v2.mantine-react-table.com', label: 'V2' },
            ]}
            onChange={(value: string | null) => {
              if (value) {
                window.location.href = `https://${value}/${pathname}`;
              }
            }}
            onClick={() => plausible('version-select')}
            value="v2.mantine-react-table.com"
            size="xs"
            maw="60px"
          />
        </Flex>

        <Box
          onClick={() => plausible('open-search')}
          id="docsearch"
          style={{
            display: 'grid',
            width: isDesktop ? '400px' : !isTablet ? '250px' : undefined,
            alignItems: 'center',
          }}
          className={classes['mrt-docs-root']}
        >
          <DocSearch
            appId="GA9W0E15I8"
            apiKey="d1d8da70283d84d7669881d993eff727"
            indexName="mantine-react-table"
          />
        </Box>
        <Box
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            // '@media (max-width: 480px)': {
            //   gap: '4px',
            // },
          }}
        >
          <Tooltip label="Github">
            <ActionIcon
              component={Link}
              aria-label="Github"
              c="white"
              variant="transparent"
              size={isMobile ? 'sm' : 'lg'}
              href="https://github.com/KevinVandy/mantine-react-table"
              rel="noopener"
              target="_blank"
            >
              <IconBrandGithub />
            </ActionIcon>
          </Tooltip>
          <Tooltip label="Discord">
            <ActionIcon
              component={Link}
              aria-label="Discord"
              size={isMobile ? 'sm' : 'lg'}
              variant="transparent"
              c="white"
              href="https://discord.gg/5wqyRx6fnm"
              rel="noopener"
              target="_blank"
            >
              <IconBrandDiscord />
            </ActionIcon>
          </Tooltip>
          <Tooltip label="Toggle Light/Dark Mode">
            <ActionIcon
              aria-label="Toggle Light/Dark Mode"
              c="white"
              variant="transparent"
              onClick={toggleColorScheme}
              size={isMobile ? 'sm' : 'lg'}
            >
              <IconSun className={cx(classes.iconLight)} stroke={1.5} />
              <IconMoon className={cx(classes.iconDark)} stroke={1.5} />
            </ActionIcon>
          </Tooltip>
        </Box>
      </AppShell.Header>
    </>
  );
};
