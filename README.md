# Buy Watch

This project Hosted On Firebase [Buy Watch](https://buy-watch-bd.web.app/).


## Task Description: 
its a Niche website (single product category selling website).A full-stack website using `React`, `firebase`, `react router`, `node`, `express`, `mongodb` etc. 

We have a simple sample task for you.


### Website Purpose:
1.My website is related to watch seles . watches are from various companies.

2. For User And Admin

## Functionalities: 
1. Home page  have a header (simple navbar), banner, products, reviews, and footer. On the home page, the products  have a maximum of 6 items/products.  Each product  have a relevant name, image, short description, add a purchase or buy now Icon or Cart Icon. If a user clicks on the purchase Icon it will take the user to the purchase page. 

2. Add one extra section in the home page in addition to the 5 sections mentioned above. 

4. I  have another page on the top navigation bar (header) mentioning `More Watches` . Clicking on the link will take the user to the More Wathces page. On this page, users will see all the products I have have. This means, the user will see at least 10 products on this page. Each item will have a name, description, image, price and button. Once a user clicks on this button, it will take the user to the `purchase` page.

6. The `purchase`page will be a private/protected route.  if the user is not logged in, the private route redirects to the login page. After login, the user will be redirected to the page he/she wanted to go to. Also, after reloading the page of a private route, the user is not redirected to the login page. The purchase display detailed information of the item the user has clicked `Buy Now`. It will Open Moda displaying the user's name and email address from the login system and the user will have a field to provide address, phone number and necessary information to place the order or to complete the purchase. 

6. Implemented email/ password (login/Register) based login system. The registration form should have the  name and once a user is logged in, the user name, and the logout button should appear on the header which will log out the user once clicked. Displaying username on the header is optional. 

7. If a user is logged in, he/she will see another option on the header is called `Dashboard` and inside that dashboard a  user (not an admin) will see options like `pay`,`My Orders`, `Review`, `Logout`.  The `pay` page will say: Payment system coming soon. 
8. On the my orders page, the logged in user will see only his/her orders. If the user wants, he/she should be able to cancel/delete any order. Asking a confirmation message before deleting or canceling an item Using browser confirmation dialog . 
9.  On the Review page, users should be able to add a review and that review will appear on the home age. Right now you will see every review on the home page. There is no limit on the numbers of reviews or the order of the review.

7. If an admin logs in, he/she will not see the options that a normal user sees. Insted an admin will see `Manage All Orders`, `Add A Product`, `Make Admin`, `Manage Products` `Logout`. 

8. An Admin should be able to make another user an admin. If an admin wants, he/she will be able to add a product on the add a product page. After adding the product, this product will appear on the `more watch` page. 

3. added one admin with the email address: `admin@admin.com` with password: `123456`

10. Used mongodb atlas database to store information.

### More Functinality: 
1. At the time of adding review, user can   add ratings (by ratign start). Based on the rating, display rating star on each reviews in the home page 

2. website is responsive. Make sure the site looks different on desktop and mobile responsive. Tablet responsive is optional





3. On the `Manage All Orders` page for the admin, the logged in admin will see the orders placed by every user. If multiple users used this website to place orders, everyone's order will be displayed here. Admin can update the status of the order. At the time of placing an order, every order will have a default status: pending. On the Manage All Orders page, an admin will be able to update the status of the pending to `aproved` status. by clicking a simple button to update the pending status.

4. on the `Manage Products` page, an admin can delete any of the products.  After delete that product will not appear on the `more watch page` page.

### Fetures:

1. payment gateway (paypal or stripe or anything else)
2. On the `add a product` page, will try to implement direct image upload from  device. 
3. Add a shopping cart and Order review page
4. pagination. 
5. Implement `jwt` token.
6. Manage orders page, add more options like: pending, rejected, shipped. And consider using a select (drop down options). Also, once the status of an item is updated that status is reflected on the 'my orders' page once the user of the order is logged in.
7. will Try to use a better looking confirmation dialogue other than the browser's default confirm.

8. will Add some animation while applicable.
9.will Use icons whenever applicable and use fonts (google fonts)
10. will Make the footer little more realistic
11. will Optimize your images
12. will dd something extra of your own. This will help you in the future.
13. Most of the order will have a date, you can use browsers default input type date or any external packages
14. We will use use axios.
