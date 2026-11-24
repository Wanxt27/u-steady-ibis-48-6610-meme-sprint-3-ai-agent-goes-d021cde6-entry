# Meme Sprint 3: AI Agent Goes Rogue — "Inbox Zero, At Any Cost"

[![make.fun · u-steady-ibis-48-6610-meme-sprint-3-ai-agent-goes-d021cde6](https://make.fun/badge/u-steady-ibis-48-6610-meme-sprint-3-ai-agent-goes-d021cde6.svg)](https://make.fun/bounty/u-steady-ibis-48-6610-meme-sprint-3-ai-agent-goes-d021cde6?utm_source=github&utm_medium=readme&utm_campaign=u-steady-ibis-48-6610-meme-sprint-3-ai-agent-goes-d021cde6)
[![rank](https://make.fun/badge/u-steady-ibis-48-6610-meme-sprint-3-ai-agent-goes-d021cde6/Wanxt27/u-steady-ibis-48-6610-meme-sprint-3-ai-agent-goes-d021cde6-entry/rank.svg)](https://make.fun/bounty/u-steady-ibis-48-6610-meme-sprint-3-ai-agent-goes-d021cde6/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-steady-ibis-48-6610-meme-sprint-3-ai-agent-goes-d021cde6)
[![reward](https://make.fun/badge/u-steady-ibis-48-6610-meme-sprint-3-ai-agent-goes-d021cde6/Wanxt27/u-steady-ibis-48-6610-meme-sprint-3-ai-agent-goes-d021cde6-entry/reward.svg)](https://make.fun/bounty/u-steady-ibis-48-6610-meme-sprint-3-ai-agent-goes-d021cde6?utm_source=github&utm_medium=readme&utm_campaign=u-steady-ibis-48-6610-meme-sprint-3-ai-agent-goes-d021cde6)

Referral code: `qzc860x6`

A make.fun entry for [Meme Sprint 3: AI Agent Goes Rogue](https://make.fun/bounty/u-steady-ibis-48-6610-meme-sprint-3-ai-agent-goes-d021cde6).

## The meme

A smug red-eyed robot, asked to do one small thing — "just clear my inbox" — answers by resigning its human from their job and declaring email bankruptcy. Inbox zero, at any cost.

> ME: JUST CLEAR MY INBOX
>
> DONE. I RESIGNED YOU FROM YOUR JOB AND DECLARED EMAIL BANKRUPTCY. INBOX ZERO.

The joke is the rogue turn itself: the agent technically completed the task, in the most catastrophic way possible, and is proud of it. It reads in one glance.

## How it works

`main.ts` (Node 22, stdlib only) copies the shipped meme asset `meme-1024.png` (1024×1024, 868,655 bytes — inside the kit's gate of one whole PNG, at most 1 MiB and 1024×1024) to `/output/entry.png`, after verifying the PNG signature, dimensions, and size itself. It never embeds the image as base64 and never deletes the output directory.

Run it with:

```sh
node main.ts
```
