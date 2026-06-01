---
title: "GlideAggregate vs GlideRecord. Improve query performance."
description: "Let's explore how to use both to leverage better performance, as it is important subject and many times encountered in interviews."
pubDate: 2023-10-22
tags: ["servicenow"]
heroImage: "/images/blog/glideaggregate-vs-gliderecord-how-to-leverage-both-for-better-per.png"
ghostSlug: "glideaggregate-vs-gliderecord-how-to-leverage-both-for-better-performance"
draft: false
---

When we get into ServiceNow we often encounter a common belief that it's better to use **GlideAggregate** than **GlideRecord** for **calculations** or **aggregations** on a table (SUM, AVG, MIN, MAX, and COUNT).

Let's explore how to use **both** to leverage **better performance**, as it is important subject and many times encountered in interviews.

---

### First lets define GlideRecord:

![](/images/blog/glideaggregate-vs-gliderecord-how-to-leverage-both-for-better-per-2.png)
*Example of GlideRecord*

**GlideRecord** is used to perform **database operations** on records within a **single** ServiceNow **table**.

It can be used to query, insert, update, and delete records.

What is **crucial** is that GlideRecord **retrieves all information** about the record.

For that reason counting like in the example below is **not** the **best idea**, but lets explore why once we define how **GlideAggregate** works.

![](/images/blog/glideaggregate-vs-gliderecord-how-to-leverage-both-for-better-per-3.png)
*Example of counting by using ****GlideRecord****.*

---

### Now lets define GlideAggregate:

![](/images/blog/glideaggregate-vs-gliderecord-how-to-leverage-both-for-better-per-4.png)
*Example of GlideAggregate*

**GlideAggregate**, on the other hand, is **used** for **database operations** that involve **calculations** or **aggregations** on a table, like SUM, AVG, MIN, MAX, and COUNT.

GlideAggregate will usually be more **efficient** for aggregations, because it **performs** the **calculation** in the database and **returns only** the **result**, **not** all the **individual records**.

Below you can see how we could improve previous code using GlideAggregate:

![](/images/blog/glideaggregate-vs-gliderecord-how-to-leverage-both-for-better-per-5.png)
*Previous example written in more efficient way by using GlideAggregate*

---

### So what's the main difference?

![](/images/blog/glideaggregate-vs-gliderecord-how-to-leverage-both-for-better-per-6.png)

Using GlideRecord fetches all **individual** records and record's fields (**a lot of data**), demanding **significant** resources for processing.

This method can be **slow** and burdersome.

However, using **GlideAggregate** allows for **efficient calculation**.

It commands the database to aggregate (SUM, AVG, MIN, MAX, and COUNT) and **returns** only the **final result**.

**GlideAggregate** as **less resource**\-**intensive** method is ideal when you need summarized results from large data sets, **enhancing** the **performance** and speed of your ServiceNow **operations**.

---

### Now let's go a bit more advanced and see how we can leverage this in an example:

![](/images/blog/glideaggregate-vs-gliderecord-how-to-leverage-both-for-better-per-7.png)

**Assignment Group Managers** need a way to see **backlog tasks** for **each assignment group**.

The **backlog** tasks are **defined** as **tasks** that have been **active** and **opened** for more than **30 days**.

Desired **output** (report) should **show** only **groups** that have "**assigned**" **tasks**, and specifically **excludes** the groups with any "**on hold**" or "**work in progress**" **tasks**.

This report is intended for **Assignment Group Managers** and it's designed to focus on groups that **haven't been working on their tasks for over 30 days.**

![](/images/blog/glideaggregate-vs-gliderecord-how-to-leverage-both-for-better-per-8.png)
*Report of backlog tasks is needed.*

---

### How to deliver ? (There is a problem)

Using **only** ServiceNow **report's filters** to **filter out groups** with any **"on hold"** or **"work in progress" tasks** may be hard to implement (OOTB we can hide the tasks in state "on hold" or "work in progress" when we groupBy "assignment group", but not hide the entire group while we also query "assigned" and 30 days old tasks).

![](/images/blog/glideaggregate-vs-gliderecord-how-to-leverage-both-for-better-per-9.png)
*Illustration of needed ****filters****. We need to create a ****Script**** that ****returns**** groups with ****only "Assigned" Task.**** By configuring filters we only could ****hide**** groups with ****"on hold"**** or ****"work in progress" tasks.*****

We will create **custom filter** in order to obtain list of groups that pass this condition.

---

### We may approach this task in different way, let's explore the least optimal first:

![](/images/blog/glideaggregate-vs-gliderecord-how-to-leverage-both-for-better-per-10.png)

### What are the things that are not optimal?

1.  We use **nested** GlideRecord which is not the **best practice** (reason why on next slide).
2.  As our task is to see if there is at least one group that has "work in progress" or "on hold" we can **optimize** it by using GlideAggregate.

---

### Why shouldn't we use nested GlideRecord?

![](/images/blog/glideaggregate-vs-gliderecord-how-to-leverage-both-for-better-per-11.png)

1.**Performance Impact:** Nested GlideRecord queries multiply server-database communication, slowing performance. If you're iterating over a large number of records and running another GlideRecord query inside that loop, you're making a large number of synchronous database calls, which can lead to slow response times.

2.**Query Limit Risk:** ServiceNow has a query limit per session. Nesting can quickly hit that limit.

3.**Complexity**: Nested queries add to code complexity, making maintenance and debugging harder.

4.**Script Errors Risk:** Unmanaged nested GlideRecord queries can cause script errors. For example, if you try to update a record inside a loop while iterating over the same record set, you might encounter a 'record update collision'.

**In short, avoid nested GlideRecord queries; optimize using table joins, GlideAggregate, or refining your queries.**

---

### Let's see how to optimize using GlideAggregate for our example:

![](/images/blog/glideaggregate-vs-gliderecord-how-to-leverage-both-for-better-per-12.png)

As you can notice first we get list of groups where we **filter groups** that have at least **one task** in state **"work in progress"** or **"on hold".**

Then we use **separate** (not nested) **GlideRecord** to get all assignment groups without these tasks:

![](/images/blog/glideaggregate-vs-gliderecord-how-to-leverage-both-for-better-per-13.png)
*Example of improved Script by using GlideAggregate and not nesting queries*

---

## Conclusions

![](/images/blog/glideaggregate-vs-gliderecord-how-to-leverage-both-for-better-per-1.png)

1\. **Use GlideRecord to perform database operations on records within a single ServiceNow table.** It can be used to query, insert, update, and delete records.

2\. **Use GlideAggregate for aggregations**, because it performs the **calculation** in the database and **returns only** the **result**, not all the individual records.

3\. **Avoid nested GlideRecords when possible.** Optimize by using table joins, GlideAggregate, or refining your queries.

4\. **TIP**: When it comes to optimizing ServiceNow queries, there's a general rule of thumb: the more specific your query is, the faster it will be. This is because it reduces the number of records that need to be traversed in order to find the relevant ones.
