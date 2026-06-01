---
title: "Optimize Your Queries ! 🚀"
description: "Let’s discuss why using “is one of” is generally more efficient than “is not” when there are multiple possible values."
pubDate: 2023-10-09
tags: ["servicenow"]
heroImage: "/images/blog/every-servicenow-developer-should-know-this-optimize-your-querrie.png"
ghostSlug: "every-servicenow-developer-should-know-this-optimize-your-querries"
draft: false
---

## Understanding Filter Conditions

When optimizing queries in ServiceNow, it’s crucial to choose the **right filter conditions.**

Today, let’s discuss why using **“is one of”** is generally more efficient than **“is not”** when there are multiple possible values.

---

![](/images/blog/every-servicenow-developer-should-know-this-optimize-your-querrie-1.png)

When you apply **“State is not Closed”**, the system evaluates **each record** to check whether its state is not **“Closed”.**

It has to **assess** this condition against **every possible state** other than “Closed”, making the system **scan each record individually.**

![](/images/blog/every-servicenow-developer-should-know-this-optimize-your-querrie-2.png)
*Image showing selection of filter "State ****is not**** Closed"*

---

![](/images/blog/every-servicenow-developer-should-know-this-optimize-your-querrie-3.png)

In contrast, “State **is one of** \[Approved, Work in Progress, On Hold\]” allows the system to **directly search for records that match any of the listed states.**

1.  **Reducing** the number of evaluations.
2.  Leading to **faster query execution.**

![](/images/blog/every-servicenow-developer-should-know-this-optimize-your-querrie-4.png)
*Image showing selection of filter “State ****is one of**** \[Approved, Work in Progress, On Hold\]”*

---

![](/images/blog/every-servicenow-developer-should-know-this-optimize-your-querrie-5.png)

If the field used in the **“is one of”** condition is indexed, the database can **quickly locate the matching records.**

It happens because it’s done **without scanning the entire table**, enhancing the performance of query execution significantly.

---

![](/images/blog/every-servicenow-developer-should-know-this-optimize-your-querrie-6.png)

While the exact speed difference can depend on various factors like indexing and distribution of records, using **“is one of”** with **specific states** is generally **more efficient** and leads to **faster query** execution **compared** to using **“is not”.**

Considering that it takes developer like **10 extra seconds** to select more fields, I think it’s **worth trade**, isn’t it ?
