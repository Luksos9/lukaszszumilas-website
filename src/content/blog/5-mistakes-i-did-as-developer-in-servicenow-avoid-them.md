---
title: "5 Mistakes I did as Developer in ServiceNow. Avoid them ❌"
description: "Introduction I started ServiceNow about 2 years ago. During this time I learned a lot about the platform. But if I had to go back in time and start again, he..."
pubDate: 2023-11-11
tags: ["servicenow"]
heroImage: "/images/blog/5-mistakes-i-did-as-developer-in-servicenow-avoid-them-hero-hyjyu.png"
ghostSlug: "5-mistakes-i-did-as-developer-in-servicenow-avoid-them"
draft: false
---

## Introduction

I started **ServiceNow** about **2** years ago.

During this time I learned **a lot** about the **platform**.

But if I had to go back in time and start again, here are **5** mistakes I’d **avoid.**

**First** and **Last** are my **favorite**.

---

## 1.Overpromise

I thought that it is **great** to deliver **many** stories in one **sprint**.

Well, it is, but...

Not when you **sacrifice** the **quality** of stories.

Always check your work even **few times**, to ensure it's free of **errors** and doesn't need **corrections** from **others**.

My lesson:

**Quality over quantity. Always.**

---

## 2.Not load US in correct order

I taken my colleague’s story.

He already **started** the implementation.

Then i **continued** implementation in **another US**.

Once I finished, I asked to **load** only my **US**, what caused some **collisions**.

My lesson is:

**Always load US in same order as they were loaded on Test**

---

## 3.Not Starting by Creating US

I started implementation, then I realized I didn’t catch it in **US**.

Quite **common** isn’t it ?

Well we can always catch it later by using “**Add to Update Set**”.

But sometimes we need to “**Backout**” the US.

Then it is much easier to do that when we have all changes in **one** place.

My lesson:

**Always start any implementation with new US.**

---

## 4.Use Server-side methods in Client-Side

A common **mistake**, that also happens to me sometimes, is that I try to put a **gs.log()** in **Client Side** (UI Policy for example).

By doing this **UI Policy doesn't work at all.**

My lesson:

**For Client Side use methods that start with “g\_”**

**For Server Side use methods that start with “gs.”**

---

## 5.Not keeping notes of past stories

Since **1** year I **always write** all my **thinking** in my notes.

This helps me stay on **track** when **implementing** a solution.

I can **send** the **notes** to my **colleagues** which **saves time.**

I can **refer** to them in order to find **solution** to **similar** issue **faster.**

Many of my **posts** are **created** from my **notes.**

And many more...

My lesson:

**Always document your implementations.**

---

## SUMMARY

1.  **Overpromise**
2.  **Not load US in correct order**
3.  **Not starting by﻿ creating US**
4.  **Use Server-side methods in Client-Side**
5.  **Not keeping﻿ notes of past stories**
