---
title: "MCP vs Traditional Integrations on ServiceNow"
description: "Two ways to connect AI to ServiceNow: traditional hand-built integrations, or the Model Context Protocol. When each one wins, and why I default to MCP now."
pubDate: 2026-05-26
tags: ["ai", "mcp", "servicenow"]
draft: false
---

There are two ways to connect an AI assistant to ServiceNow. You can build a traditional integration, or you can use MCP. I spent a while doing the first one. Now I default to the second, and here's why.

## The DIY way

The do-it-yourself approach is familiar to every ServiceNow developer. You stand up a Scripted REST API, write the auth handling, parse the request, run a GlideRecord query, shape the response, and handle the errors. Then you do it again for the next use case. And again.

It works. But every integration reinvents the same plumbing: auth, pagination, error handling, rate limits. The logic that decides what the AI can touch ends up smeared across a dozen scripts. Six months later, nobody can answer "what can this assistant actually do" without reading all of them.

## The MCP way

MCP, the Model Context Protocol, flips that. You run one server that exposes a deliberate set of tools and resources. The assistant calls those tools through a standard interface. You define the menu once, in one place.

The wins are concrete. You write one auth and error-handling layer instead of one per integration. You get a single readable list of what the assistant can do. Scopes and ACLs still enforce permissions on every call. And a new use case means adding a tool, not rebuilding the plumbing.

ServiceNow shipping a supported MCP server changed the math here. The standard plumbing is now something you configure and govern, not something you maintain.

## When DIY still wins

MCP isn't always the answer. If you've got a single, narrow, high-volume integration that will never change, a purpose-built Scripted REST API can be simpler and faster. DIY also wins when you need a response shape so specific that a general tool interface gets in the way.

The rule I use: if it's one fixed pipe, build the pipe. If it's a surface a model will explore and that will grow over time, use MCP.

## My default

For anything AI-facing that will evolve, I reach for MCP first. It puts the governance in one place I can audit, and it stops every new idea from turning into another pile of integration glue.

The model will keep changing. The discipline of exposing a controlled surface and keeping your scopes honest will not.
