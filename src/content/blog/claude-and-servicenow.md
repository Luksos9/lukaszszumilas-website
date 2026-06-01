---
title: "Claude and ServiceNow: a practical look"
description: "ServiceNow made Claude a default model and shipped a supported MCP server. Here's what that combination unlocks, and where it still needs your governance."
pubDate: 2026-05-30
tags: ["ai", "servicenow", "mcp"]
draft: false
---

ServiceNow made Claude a default model for its Build Agent and shipped a supported MCP server. That's the kind of announcement that sounds like plumbing and turns out to matter more than the feature it's buried under.

Here's why I pay attention to it.

## The model was never the hard part

Swapping in a strong model is easy. Anyone can call an API. The hard part has always been giving that model safe, governed access to your data, and that is exactly what the MCP server changes. Instead of every team hand-building a connection, you get one supported surface that Claude talks to, and you decide what's on it.

So the interesting question is what it can reach, and who decided that. Whether the model is any good is the easy part.

## What the combination actually unlocks

Two uses stop being fiddly and start being realistic. The cleanest is a knowledge assistant that answers from your own ServiceNow data, with sources a user can open and check. The bigger one is agentic work, where Claude reasons through a task and acts through governed tools instead of a pile of custom scripts. (Developers quietly get a third: Claude Code shortens the loop from "I need a Script Include that does X" to a working draft.)

None of these are magic. They're the same jobs you'd do by hand, with a faster and more capable worker that still answers to your permissions.

## Why I lean Claude, and where I stay honest

I like Claude's posture on tool use and governance, and the partnership makes it the path of least resistance on ServiceNow right now. That's the near-term bet. The durable bet is the capability underneath: MCP and a controlled surface that holds regardless of which model is winning next year. I build for the second one and enjoy the first while it lasts.

Because here's the thing the launch slide won't tell you. None of this removes your governance work. Claude through MCP can still only do what your scopes and ACLs allow, and that's a feature, not a gap. The model changed. The discipline didn't.

If you take one thing from the ServiceNow and Anthropic news, make it this: the win is a governed surface you control, and the model plugged into it is the part you're allowed to change your mind about later.
