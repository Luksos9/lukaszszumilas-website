---
title: "Unleashing the Power of ServiceNow's Dynamic Filters"
description: "When working with ServiceNow, knowledge of Dynamic Filters can elevate your data management game."
pubDate: 2023-10-22
tags: ["servicenow"]
heroImage: "/images/blog/unleashing-the-power-of-servicenows-dynamic-filters-hero-funnel.png"
ghostSlug: "unleashing-the-power-of-servicenows-dynamic-filters"
draft: false
---

When working with ServiceNow, knowledge of **Dynamic Filters** can elevate your data management game.

They allow **seamless filtering** of **data** and can be **customized** to suit specific needs.

**Let's dive deep** into the benefits they offer and how to set up them properly.

---

### Introduction to Dynamic Filters in ServiceNow

**Dynamic Filters** are tools that allow users to filter data based on various criteria.

They can be used in reports, dashboards, and other applications.

I'm sure that if you have been in a ServiceNow for a while you are familiar with filters like:

![](/images/blog/unleashing-the-power-of-servicenows-dynamic-filters-image-128.png)

---

## Let's try to create our own Dynamic Filter based on some scenario

### Example: First Creating a Custom Filter

![](/images/blog/unleashing-the-power-of-servicenows-dynamic-filters-image-129.png)

Doesn't seem hard, so let's **define** on next slide a Scenario where problem emerges that we can solve by using **Custom Filter** and then improve by using Dynamic Filter:

---

### Scenario

**Cutomer needs a report.**

This report will be displayed to each **Country Manager.**

In this report there should be shown all a**ssignment groups with backlog tasks.**

**Backlog tasks are tasks that are either "Work in progress" or "Assigned" for more than 30 days.**

The report should show **automatically** for each Country Manager once they enter the report.

So we cannot set it **fixed**.

This second part for which we will need a **Custom Filter,** as you can see on the image below:

![](/images/blog/unleashing-the-power-of-servicenows-dynamic-filters-image-139.png)

---

### First let's create Custom Filter

For this first let's create a new Script Include that will be our **Custom Filter** (later we will improve useability by creating a Dynamic Filter:

![](/images/blog/unleashing-the-power-of-servicenows-dynamic-filters-image-138.png)

### Explanation:

We created a new Script Include "**GetManagerCountry**".

As name suggests the script takes currently logged in user (Country Manager for our case) and then it returns **"Country"** (Legacy Country) of that manager.

By having this filter we will be able to automatically display **assignment groups** only for Manager's Country as **required** in scenario.

---

### Okay let's add it to our report's filters

![](/images/blog/unleashing-the-power-of-servicenows-dynamic-filters-image-130.png)
*Look at what is in the filter (sys\_id returned) and what is in the field (Script Include).*

### Explanation:

![](/images/blog/unleashing-the-power-of-servicenows-dynamic-filters-image-131.png)

---

### Make it better with Dynamic Filter

Okay, so we got our functionality.

It is working good, but we can still improve it by setting our Custom Filter (Script Include) as a **Dynamic Filter.**

Here are some banefits why it's worth it:

1.  **Flexibility**: Quick filtering based on specific needs.
2.  **Reusability**: It's easier for users that are not into programming to just select needed filter.
3.  **Customization**: Tailor filters using Script Includes.
4.  **Efficiency**: Improve data management in your organization.

### This is what we want to achieve:

![](/images/blog/unleashing-the-power-of-servicenows-dynamic-filters-image-140.png)

---

### How to set up Dynamic Filter

Okay, so on previous slide we saw what are **benefits** of **Dynamic Filter** and how settled up Dynamic Filter should look like.

As you can see each user will now be able to select this whenever they need in a **easy way.**

Lets see now how to **create** a **Dynamic Filter:**

1.  **Go to System Definition > Dynamic System Options**
2.  **Select "New".**
3.  **Populate the fields.**

On the next slide some tips and hints how to do that in proper way and for our example.

---

### How to set up Dynamic Filter c.d.

![](/images/blog/unleashing-the-power-of-servicenows-dynamic-filters-image-141.png)

**Okay so here is brief explanation, I think there is no much for it, as Labels and Hints are pretty clear:**

**Label** \- How your Dynamic Filter will be named (make sure users understand what the filter is for)

**Script** \- Our Custom Filter (Script Include) that we created

**Field Type** \- Reference (I want Dynamic Filter to be available for Reference type of Field)

**Referenced table** - Country (As in our example i'm retrieving a Country from a Country Table for logged in Country Manager/User)

**Order** - Where it should be (I put 200, so you can see on a previous slide its on second place)

**Available for filter** - I needed it in a report, so yes i want it available. For Default and Ref Qual we dont need for our case.

**Roles** \- We could specify the managers role and make it available only to them, but it's fine like that. We can let all use it

**Active** \- this is tricky, but setting to true makes it actually work, so i recommend setting to true

---

### Final look before conclusions

**Below is how it looks with our Custom Filter vs Dynamic Filter**

![](/images/blog/unleashing-the-power-of-servicenows-dynamic-filters-image-142.png)
*Notice the sys\_id returned in the filter.*

![](/images/blog/unleashing-the-power-of-servicenows-dynamic-filters-image-143.png)
*Here is dynamic filter choosen.*

---

## Conclusion

![](/images/blog/unleashing-the-power-of-servicenows-dynamic-filters-image-102.png)

![](/images/blog/unleashing-the-power-of-servicenows-dynamic-filters-image-136.png)
