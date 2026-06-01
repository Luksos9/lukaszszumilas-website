---
title: "ServiceNow .get() vs .next(): Querying a Single Record"
description: "Why .get() is the efficient way to pull a single GlideRecord, and what .next() costs you when you use it for that job."
pubDate: 2023-10-22
tags: ["servicenow"]
heroImage: "/images/blog/maximizing-efficiency-in-servicenow-get-vs-next-hero-next-vs-get.webp"
ghostSlug: "maximizing-efficiency-in-servicenow-get-vs-next"
draft: false
---

Ever wondered how to retrieve a **single record** from ServiceNow ?

Throughout my journey with ServiceNow I would approach this tasks very **differently**.

Lets see what are ways to level up this code from **Beginner** to **Pro**

---

### Query Single Record - Level Beginner

![](/images/blog/maximizing-efficiency-in-servicenow-get-vs-next-image-99.webp)

If you have been in a ServiceNow for a while you immediately notice that this is **not** the **best way** to query a **single record** because of a few things.

Let’s explore them.

---

### 1\. Using ‘if (gr.next())’ instead of ‘while (gr.next())’

![](/images/blog/maximizing-efficiency-in-servicenow-get-vs-next-image-107.webp)

**if (gr.next())**

is used when you're **only** interested in processing a **single record.**

If a record is found that matches the query, the code inside the if block will be executed **once**, and then the program will **move on.**

This is useful when you're querying for a **specific record** and you know there will only be **one match**, or when you just want to check if any matching records **exist**.

**while (gr.next())**

on the other hand, is used when you want to process **multiple** records.

The code inside the while block will be executed **for each record** that matches the query, until there are no more matching records.

This is useful when you're querying for **all records** that meet certain criteria and you want to do something with each one.

So, if you're only interested in a single record, **if (gr.next())** is better because it makes it clear that only **one record** will be processed, and it avoids unnecessary iterations.

If you used **while (gr.next())** and there were **multiple** matching records, it would process **all** of them, which could be inefficient and could lead to unexpected results if you're not expecting more than one match.

---

### **2\. Using .setLimit(1)**

![](/images/blog/maximizing-efficiency-in-servicenow-get-vs-next-image-103.webp)

The **.setLimit(1)** method limits the query to return only **one record**.

This can **improve performance**, because search is **stopped** when specified amount of records is found (in our example it's 1).

Whenever you **know number** of **records** that you want to query, **.setLimit** is good choice, as it stops right after it finds desired number of records.

If you use **.setLimit(1)** with **if (gr.next())**, it will work as expected.

The query will return at most one record, and if a record is found, the code inside the if block will be executed once.

If you use **.setLimit(1)** with **while (gr.next())**, the while loop will also only iterate **once**, because the query will only return at most **one record** due to the **limit**.

So in this case, using **while** would be equivalent to using **if**.

However, using **while (gr.next())** with **.setLimit(1)** could be **misleading** to someone reading the code, because while is typically used when you want to process **multiple** records.

If you know you only want **one record**, it's clearer to use **if (gr.next()).**

### In Summary

If you're only interested in a **single** record, it's better to use **if (gr.next())** with **.setLimit(1)**.

If you're interested in **multiple** records, you should use **while (gr.next())**, and only use **.setLimit(1)** if you want to limit the results to **one record** for some reason.

---

### **3\. Using ‘.get()’**

![](/images/blog/maximizing-efficiency-in-servicenow-get-vs-next-image-105.webp)

My personal **favorite** is using **.get()** to query a **single** record.

If you know **unique identifier** of record you are looking for like **sys\_id** (but you can also use other like **number** of INC etc.) method can be **faster** and more **efficient**.

The .get() method retrieves one record based on the sys\_id or a specified condition, and it **stops** querying once it **finds** a **match**.

**But you must be aware of one thing !**

![](/images/blog/maximizing-efficiency-in-servicenow-get-vs-next-image-100.webp)
*Example of .get() usage*

**Be aware** that **‘if’** statement is **crucial** !

By wrapping the **.get()** method in an **if** statement, you're checking whether a record was **actually returned** before **trying** to **access** it.

If you **don't** do this and try to access fields on the **Glide Record object** when **.get()** has returned **false**, you'll get a **null** reference error because there's **no record** to access.

While the .**get()** method can indeed be used to retrieve multiple records if used in conjunction with **.next()**, it's not the most efficient way to do so.

The .**get()** method is primarily designed to retrieve a **single** record based on a **unique identifier** (like sys\_id) or a unique condition.

If multiple records match the condition, **.get()** will only return the first one, and you would have to call .next() to access the others.

So, if you need to retrieve **multiple** records, it's recommended to use **.addQuery()/.query()** with a **while(gr.next())** loop.

If you need to retrieve a **single** record based on a unique condition, use **.get().**

---

## Conclusions

![](/images/blog/maximizing-efficiency-in-servicenow-get-vs-next-image-102.webp)

1\. Use **‘if’** when querying with **single** record, use **‘while’** when querying **multiple** records.

2\. Use **‘.setLimit()’** whenever you know **number** of **records** that are to be **returned**.

This way the search **stops** as soon as number of **limited** records is met.

So for exmple when **.setLimit(1)** finds one record that matches the query it stops looking for more.

3\. Use **‘.get()’** is the best way to retrieve a **single** record, as it looks throught database and **stops** at **first record** that it finds.

It has also the **shortest syntax**.
