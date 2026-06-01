---
title: "Naming Variables in ServiceNow: Is 'var gr' Dangerous?"
description: "Is naming a GlideRecord 'gr' a real problem? How I think about variable names, and why moving code into functions pays off."
pubDate: 2023-10-11
tags: ["servicenow"]
heroImage: "/images/blog/what-are-the-best-ways-to-name-a-variable-in-servicenow-hero-dang.webp"
ghostSlug: "what-are-the-best-ways-to-name-a-variable-in-servicenow"
draft: false
---

**In this article I want to explain:**

-   What are the **best** ways to name a variable in **ServiceNow**
-   Why writing a code in **functions** is really **good practice**
-   What are benefits of using both of above
-   Why we shouldn't **ignore** this

I will provide real life scenarios, so you can understand better.

**Interested?**

**So lets go!**

---

![](/images/blog/what-are-the-best-ways-to-name-a-variable-in-servicenow-image-50.webp)

**Two ServiceNow developers** are working on **business rules**, each targeting different tables in the same ServiceNow instance.

Both use Glide Record to query data, but focus on different aspects:

-   Developer A on the **Incident table**
-   Developer B on the **Change Request table.**

### **Developer A's Business Rule on the Incident table:**

![](/images/blog/what-are-the-best-ways-to-name-a-variable-in-servicenow-image-40.webp)
*****Developer**** ****A**** named his Glide Record ****'gr'*****

### **Developer B's Business Rule on the Change table:**

![](/images/blog/what-are-the-best-ways-to-name-a-variable-in-servicenow-image-41.webp)
*****Developer**** ****B**** also named his Glide Record ****'gr'*****

---

![](/images/blog/what-are-the-best-ways-to-name-a-variable-in-servicenow-image-39.webp)

Consider a situation where an **incident is spawned from a change request.**

Both of these business rules would be activated nearly at the **same time** or in **overlapping** contexts.

In a typical setting, where both developers used a non-descriptive variable like **'gr'**, there would be a **risk of data confusion** between the two scripts.

---

### **How to prevent such scenario?**

If instead of naming **'gr'** Developer A used more **descriptive** variable naming like **'incGr'** and Developer B used **'chgGr'** for their respective GlideRecords it would prevent the overlapping.

This eliminates the possibility of the Glide Record variable from Developer A's script mistakenly referring to the change request data from Developer B's script, or vice versa.

By following such **straightforward** but effective variable naming conventions, both developers ensure that their scripts operate on the intended tables, **reducing** the likelihood of problematic data **overlaps**.

---

![](/images/blog/what-are-the-best-ways-to-name-a-variable-in-servicenow-image-42.webp)

Lets go through one more scenario, but with this one we will see how function scope works.

Both developers decide to add some utilities for their respective tables in Script Includes.

---

### **First lets understand function scope:**

![](/images/blog/what-are-the-best-ways-to-name-a-variable-in-servicenow-image-43.webp)
*Here we define myVariable in 2 scopes, ****global**** and ****local*****

### **Output:**

![](/images/blog/what-are-the-best-ways-to-name-a-variable-in-servicenow-image-44.webp)
*As you can see same name gives ****different**** results*

---

### **Developer A's Script Include:**

![](/images/blog/what-are-the-best-ways-to-name-a-variable-in-servicenow-image-45.webp)

### **Developer B's Script Include:**

![](/images/blog/what-are-the-best-ways-to-name-a-variable-in-servicenow-image-46.webp)

---

### **What happens if both Developer's Script Includes will be used in same script ?**

**JavaScript** generally has **function**\-level scope, which means that variables **declared within a function** are **not accessible outside that function.**

In the given example of ServiceNow Script Includes, each utility function (**getHighPriorityIncidents** and **getEmergencyChanges**) declares its own gr variable within its **own function scope**.

As long as these functions are not nested or otherwise sharing the same execution context, there shouldn't be a problem with the **'gr'** variable being overridden by the other.

Each function has its own distinct scope, so the **'gr'** variable in **getHighPriorityIncidents** is **separate** from the **'gr'** variable in **getEmergencyChanges.**

If these two functions are called independently, even within the same script, they won't interfere with each other's variables.

---

### **Here's where the confusion might have arisen:**

If you have **asynchronous** code execution where these functions are not isolated (like **callbacks, Promises, or other advanced JavaScript features that may share scope**), then you could potentially have issues with variable overlap.

However, this would generally require a more **complex** setup than the straightforward, **synchronous** Glide Record queries shown in example.

In summary, function scope **should protect the gr variables** in the two Script Includes from affecting each other when used in the same script, **as long as** the functions are being called in a **straightforward**, **synchronous** manner.

---

![](/images/blog/what-are-the-best-ways-to-name-a-variable-in-servicenow-image-47.webp)

So even if two Developers defined **'var gr'** in their Script Includes as long as they defined it within function scope **it won't cause any problems** **even when both Script Includes are used in the same Script.**

This is because code executes line by line (I am not speaking of **asynchronous** code execution).

So first function of Developer A will return it's result.

Then function of Developer B will return it's result and even if both use same variable name **'gr'** they will not overlap.

---

![](/images/blog/what-are-the-best-ways-to-name-a-variable-in-servicenow-image-48.webp)

1.  Even if variable **overlap** is really rare scenario it **can happen**, especially in large instances.
2.  To **prevent** variable **overlap** use both **descriptive naming** of variables like 'incGr' instead of just 'gr' or even 'activeIncGr' to be more **descriptive**.
3.  To **prevent** variable **overlap** you can combine descriptive variable naming with **'dressing'** your **code** in **functions**. For example you can write your User Criteria like this:

![](/images/blog/what-are-the-best-ways-to-name-a-variable-in-servicenow-image-49.webp)
*Example of User Criteria written by ****'dressing'**** it in a ****function**** and ****invoking****.*
