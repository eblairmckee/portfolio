import React from 'react';
import { Window, WindowProps } from '../Window';

export const Bio = (props: Omit<WindowProps, 'title' | 'children'>) => (
  <Window title="Welcome" width="80vw" maxWidth="550px" height="min(70vh, 500px)" roundedBorder {...props}>
    <h1>Hey, I'm Blair.</h1>
    <h2>I'm a frontend developer from Chicago.</h2>
    <h3>I've been building things for the web for 5 years. </h3>
    <p>
      I taught myself how to code when I was working as a copywriter, so I could control how my content was being
      presented on our company websites. I picked up WordPress soon after, and freelanced websites and single page apps
      for defense contractors in my hometown of DC.
    </p>
    <p>
      I then landed a full time developer job at a healthcare tech company, Rally Health, which had just been acquired
      by United Healthcare. There, I built admin tooling and a service discovery catalog app (loosely based on Spotify's
      Backstage) that I got to design and build.
    </p>
    <p>
      Not long after, I joined Coinbase's design system team and built out 7 cross-platform components and developed a
      system for SSR-friendly responsive styles. Recently, I was part of a multi-team effort to enable the new React
      Native Fabric architecture within our design system. I also helped design a "bootcamp project" program for new
      hires and mentored dozens of cohorts through their first 30 days at Coinbase.
    </p>
    <p>
      Throughout my career I've been an active speaker sharing my work and learnings within internal communities and
      conferences.
    </p>
  </Window>
);
