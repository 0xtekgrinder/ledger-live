// @flow

import React from 'react'
import { shell } from 'electron'
import styled from 'styled-components'
import { i } from 'helpers/staticPath'

import Box from 'components/base/Box'
import Button from 'components/base/Button'
import ConfettiParty from 'components/ConfettiParty'

import IconCheckFull from 'icons/CheckFull'
import IconSocialTwitter from 'icons/Twitter'
import IconSocialReddit from 'icons/Reddit'
import IconSocialGithub from 'icons/Github'

import type { StepProps } from '..'
import { Title, Description, LiveLogo } from '../helperComponents'

const ConfettiLayer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  pointer-events: none;
`

const socialMedia = [
  {
    key: 'twitter',
    url: 'https://twitter.com/LedgerHQ',
    icon: <IconSocialTwitter size={24} />,
    onClick: url => shell.openExternal(url),
  },
  {
    key: 'github',
    url: 'https://github.com/LedgerHQ',
    icon: <IconSocialGithub size={24} />,
    onClick: url => shell.openExternal(url),
  },
  {
    key: 'reddit',
    url: 'https://www.reddit.com/r/ledgerwallet/',
    icon: <IconSocialReddit size={24} />,
    onClick: url => shell.openExternal(url),
  },
]

export default (props: StepProps) => {
  const { finish, t } = props
  return (
    <Box sticky justifyContent="center">
      <ConfettiLayer>
        <ConfettiParty />
      </ConfettiLayer>
      <Box alignItems="center">
        <Box style={{ position: 'relative' }}>
          <LiveLogo
            style={{ width: 64, height: 64 }}
            icon={<img alt="" src={i('ledgerlive-logo.svg')} width={40} height={40} />}
          />
          <Box color="positiveGreen" style={{ position: 'absolute', right: 0, bottom: 0 }}>
            <IconCheckFull size={18} />
          </Box>
        </Box>

        <Box pt={5} align="center">
          <Title>{t('onboarding:finish.title')}</Title>
          <Description>{t('onboarding:finish.desc')}</Description>
        </Box>
        <Box p={5}>
          <Button primary padded onClick={() => finish()}>
            {t('onboarding:finish.openAppButton')}
          </Button>
        </Box>
        <Box horizontal mt={3} flow={5} color="grey">
          {socialMedia.map(socMed => <SocialMediaBox key={socMed.key} socMed={socMed} />)}
        </Box>
      </Box>
    </Box>
  )
}

type SocMed = {
  icon: any,
  url: string,
  onClick: string => void,
}

export function SocialMediaBox({ socMed }: { socMed: SocMed }) {
  const { icon, url, onClick } = socMed
  return (
    <Box
      horizontal
      style={{
        cursor: 'pointer',
      }}
      onClick={() => onClick(url)}
    >
      {icon}
    </Box>
  )
}

export const FollowUsDesc = styled(Box).attrs({
  ff: 'Museo Sans|Regular',
  fontSize: 4,
  textAlign: 'center',
  color: 'grey',
})`
  margin: 10px auto;
`
