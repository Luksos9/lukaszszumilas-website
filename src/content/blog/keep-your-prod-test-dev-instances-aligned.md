---
title: "Keep Your Prod, Test, and Dev Instances Aligned"
description: "Drift between instances is where deploys break. Here is why keeping Prod, Test, and Dev in sync saves you painful debugging."
pubDate: 2023-11-11
tags: ["servicenow"]
heroImage: "/images/blog/keep-your-prod-test-dev-instances-aligned-hero-wdxaswdwa.webp"
ghostSlug: "keep-your-prod-test-dev-instances-aligned"
draft: false
---

### Why? 💡

It is crucial for maintaining **consistency** and **control** over your processes.

### What does that mean? 🤔

**Lets see on real life scenario:**

You implement a script to add 100 new groups with different names, but similar configuration.

You run the script on Developer Instance and the table gets populated.

Then you run the same script on Test and Prod.

**This is WRONG ❌**

By doing this all groups were created with different sys\_id.

### Why is it an issue? 🤔

**Sys\_ids** are unique identifiers for records in ServiceNow.

If you have different **sys\_ids** for the same item across **Dev**, **Test**, and **Prod**, you're essentially dealing with '**clones**' with their own set of fingerprints.

This can lead to mismatched data.

This can lead to scripts not working, when they use particular sys\_id.

It happens many times that a script references to particular sys\_id of an record (for example User or Group)

### How to avoid this ? 😭

When you create a record on any of the instances then **IMPORT** it to another one.

Do not create a new record in both instances.

Use **Update Set** or **Import XML** in order to import.

**By doing this you keep the instances aligned.**
