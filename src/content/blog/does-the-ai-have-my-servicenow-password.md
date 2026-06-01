---
title: "Does the AI have my ServiceNow password?"
description: "The first question every security team asks when you connect an AI assistant to ServiceNow. The honest answer, and how OAuth and MCP keep the password out of it."
pubDate: 2026-05-12
tags: ["ai", "mcp", "servicenow"]
draft: false
---

The first time you suggest connecting an AI assistant to a production ServiceNow instance, someone on the security team asks the obvious question: does the AI get my password?

No. And if the answer were yes, you should stop the project.

Here is what actually happens, and why the architecture matters more than the model.

## The password never moves

When you connect an AI assistant to ServiceNow the right way, the assistant never sees a username or password. It authenticates through OAuth. The instance hands out a token that is scoped to specific permissions and expires on a clock you control. The assistant carries that token, not your credentials.

That distinction is the whole game. A leaked password is a standing key to the building. A leaked token is a visitor badge that stops working at lunch.

## Where MCP fits

MCP, the Model Context Protocol, is the layer that standardizes how an AI assistant asks for data and triggers actions. Instead of every integration inventing its own glue, the model talks to an MCP server you run. That server decides which tables, records, and operations are even on the menu.

So the real control points are not in the model at all. They are in your instance:

- The OAuth scope decides what the token is allowed to request.
- Your ACLs still apply to every read and write, exactly as they do for a human.
- The MCP server exposes a deliberate set of tools, not the whole platform.
- Token expiry and audit logs mean every action has a name and a timestamp.

## The part people miss

The model is not the boundary. Your governance is. An AI assistant connected through OAuth and MCP can do precisely what you allowed a token to do, and nothing else. If that set is too wide, the problem is your scope design, not the AI.

That is also the good news. You already know how to reason about scopes, roles, and ACLs. Putting AI on ServiceNow safely is mostly the work you already do, pointed at a new kind of caller.

So when the security team asks whether the AI has the password, the right answer is better than no. It is: the AI cannot have the password, because the architecture never gives it one.
