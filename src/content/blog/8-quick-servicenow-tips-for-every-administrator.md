---
title: "8 Quick  ServiceNow Tips For Every administrator"
description: "Optimize your ServiceNow Admin tasks with 8 key tips for faster Incident Resolution."
pubDate: 2023-10-08
tags: ["servicenow"]
heroImage: "/images/blog/8-quick-servicenow-tips-for-every-administrator-hero-servicenow-a.png"
ghostSlug: "8-quick-servicenow-tips-for-every-administrator"
draft: false
---

## **Introduction**

In a world where every second counts, IT admins can't afford to lose time on incident/request management.

Ever felt like your ServiceNow queue doesn't empty fast enough?

If so, this post is for you.

I've compiled 8 quick ServiceNow tips to help you resolve incidents.

Don't miss out!

---

## 1\. Priority

![](/images/blog/8-quick-servicenow-tips-for-every-administrator-image-4.png)

### Key Points:

**Priority** is the **#1 factor** in determining the **urgency and impact** of an incident.

A high-priority incident affecting multiple users or critical functions demands immediate attention.

### Key Points:

-   **Urgency + Impact = Priority.**
-   High-priority incidents require **immediate action**
-   Crucial for service delivery and operational **efficiency**.

### Why Priority Matters:

Downtime is **expensive and disruptive.**

It's tempting to work on easier tasks, but **addressing high-priority incidents first is non-negotiable.**

Of course, it can be challenging to quickly identify the root cause of a problem.

But, there are some tools, that we will explore later, that help to find a solution.

### Best Practices:

-   Always attack **high-priority incidents first.**
-   Resist the burning urge to focus on easier, but lower-priority tasks.
-   When stuck, **seek help** basically everywhere you can.

---

## 2\. SLA (Service Level Agreement)

![](/images/blog/8-quick-servicenow-tips-for-every-administrator-image-5.png)

An **SLA** is a contract that sets the expectations for incident resolution times.

Simply saying it is the **agreed time that you have to resolve the incident.**

It serves as the **standard** for evaluating how **well** and how **efficiently** your **incident management** process is working.

### Key Points:

-   Defines resolution time expectations.
-   Sets accountability for service delivery.
-   Measures **performance** and **efficiency**.

### Why SLA Matters:

**SLAs** are crucial because they prevent misunderstandings and **ensure timely resolution of incidents.**

### **Best Practices:**

-   Regularly review and update SLAs.
-   Monitor SLA compliance closely.
-   Communicate SLA statuses transparently.
-   Train staff on the importance of meeting SLAs.

---

## 3\. Notifications Preview

![](/images/blog/8-quick-servicenow-tips-for-every-administrator-image-6.png)

**Notifications Preview** is awesome when resolving incidents regarding notifications.

They **allow you to see in real-time if a user should receive a notification** and why they might not be getting one.

## Key Points:

-   Diagnoses notification issues in incident management.
-   Shows **who** should receive notifications and **why**.

You can choose Event Creator and Preview Record by using  
**“Notification Preview”:**

![](/images/blog/8-quick-servicenow-tips-for-every-administrator-image-7.png)
*Image illustrating why user was not receiving notifications (he unsubscribed*

### Why Preview Notifications Matters:

**Missed** notifications **can stall** incident resolution and **frustrate users**.

**With Preview Notifications, you eliminate the guesswork.**

You can confirm who's getting notified and solve it if they're not, ensuring smooth incident management.

### Best Practices:

-   Use **Preview Notifications to debug** communication issues.
-   Double-check conditions and recipients.
-   Don't just assume—**confirm notifications with Preview.**

---

## 4\. User Criteria Diagnostics

![](/images/blog/8-quick-servicenow-tips-for-every-administrator-image-9.png)

**User Criteria Diagnostics (UCD)** is your go-to tool for troubleshooting access issues during incident resolution.

It helps you understand why a user can or cannot see certain data or options, ensuring you're not hindered by permissions.

There is **UCD** for **Service Catalog** and **Knowledge**.

### Key Points:

-   **Troubleshoots** user access **issues** in incidents.
-   Reveals **why** certain data may be **hidden**.

### Example:

![](/images/blog/8-quick-servicenow-tips-for-every-administrator-image-10.png)
*Image showing User Criteria Diagnostic and Evaluation for "Abel Tuter". He is able to see the Catalog Item "Service Category Request"*

### Why User Criteria Diagnostics Matter:

**User Criteria Diagnostics** allows you to quickly identify and solve these **visibility issues,** keeping incident resolution on track.

### Best Practices:

-   Use Diagnostics **before escalating access issues.**
-   Check it when roles or permissions change.
-   Keep it in your **troubleshooting toolkit** for quick reference.

---

## 5\. Reference Qualifier

![](/images/blog/8-quick-servicenow-tips-for-every-administrator-image-11.png)

ServiceNow uses a **Reference Qualifier** to **limit the data displayed in reference fields.**

It acts as a filter, allowing **only specific records** from another table to be **displayed**.

**So for example on instance there are 1000 Users, but as Caller user can only see and select 960 users, which are Active Users.**

### Key Points:

-   **Filters** data in **reference** fields.
-   Can be a fixed query or scripted.
-   **Enhances** data integrity and **user experience**.

### Example:

![](/images/blog/8-quick-servicenow-tips-for-every-administrator-image-12.png)
*Reference Qualifier that shows only Active Users in Incident form for a “Caller” field. If user is not able to select a User the possible cause may be that this User is inactive, therefore filtered by Reference Qualifier.*

### Why Reference Qualifier Matters:

If users **can't see** certain records in an Incident form, the **Reference Qualifier** may be the **reason**.

### Best Practices:

-   Keep qualifiers **simple** for easier debugging.
-   Always **document** your qualifiers.

---

## 6\. Impersonate

![](/images/blog/8-quick-servicenow-tips-for-every-administrator-image-13.png)

**Impersonating** a user in ServiceNow **allows you to see the system through their eyes.**

This feature is a **game-changer for incident resolution.**

It **helps** you quickly understand user-specific issues, **speeding-up your troubleshooting process.**

### Key Points:

-   View ServiceNow as another user without needing their **password**.
-   **Diagnose** user-specific **incidents** effectively.
-   Validate solutions from a **user's perspective.**
-   See what their favorite modules are :D

### Why Impersonate Matters:

User-specific incidents can be tricky.

**Impersonating** a user **allows** you to '**walk in their shoes**', making it easier to pinpoint issues and verify that they've been resolved, ensuring a smoother, more effective incident resolution process.

### Best Practices:

-   Use Impersonate **cautiously and responsibly!**
-   Document your actions while impersonating for auditing purposes.
-   Do not forget to **revert to your original profile after troubleshooting** (happens way too often :D).

---

## 7\. Debug Security Rules

![](/images/blog/8-quick-servicenow-tips-for-every-administrator-image-14.png)

**Debug Security Rules** is your tool for **dissecting permission issues.**

This feature allows you to **see in real-time which ACLs** (Access Control Rules) are being **applied or ignored**, making it an essential utility for **resolving incidents** tied to permissions.

### Key Points:

-   Understand which **ACLs** are applied to transactions.
-   Uncover **permission-related roadblocks** in incident resolution.
-   **Real-time analysis** of **security rules** in action.

### Example:

![](/images/blog/8-quick-servicenow-tips-for-every-administrator-image-16.png)
*Debug Security Rules: shows which accesses are granted and which are not*

### Why Debug Security Rules Matter:

Using **Debug Security Rules**, you can **quickly identify** which **ACLs** are causing **issues**.

It is allowing for a faster and more accurate fix, **improving** the **incident resolution process.**

### Best Practices:

-   Activate Debug Security Rules only when necessary due to performance concerns.
-   Turn on DSR as admin, then impersonate user.
-   Turn off the feature when done to avoid unnecessary system load.

---

## 8\. Related Search Results

![](/images/blog/8-quick-servicenow-tips-for-every-administrator-image-18.png)

Related Search Results in ServiceNow offer contextual suggestions based on the incident at hand.

This AI-driven feature helps you quickly find solutions from past incidents or knowledge articles, leading to quicker resolution times.

### Key Points:

-   AI-powered search that suggests relevant solutions and articles.
-   Instantly access historical data for similar incidents.
-   Improves the efficiency of incident diagnosis and resolution.

### Example:

![](/images/blog/8-quick-servicenow-tips-for-every-administrator-image-19.png)
*Here is example of Related Search Result. It is using AI in order to search for similar Incidents, Knowledge Articles and so on.*

### **Why Related Search Results Matter:**

**Reinventing the wheel** for every incident is a **waste of time.**

With Related Search Results, you gain **immediate insights into similar past incidents** and their **solutions**, allowing you to resolve current incidents faster and more efficiently.

### Best Practices:

-   Make it a habit to check Related Search Results when starting on a new incident.
-   Update your knowledge base regularly to improve the feature's accuracy.
-   Use analytics to refine and improve search result relevancy over time.

---

## Summary

1.  Priority.
2.  SLA.
3.  Notification Preview.
4.  User Criteria Diagnostic.
5.  Reference Qualifier.
6.  Impersonate.
7.  Debug Security Rules.
8.  Related Search Results.
