import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import TopMenu from "./components/TopMenu";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.min.css";
import PostPrice from "./views/price/PostPrice";
//const Header = lazy(() => import("./components/Header"));
//const TopMenu = lazy(() => import("./components/TopMenu"));
const HomeView = lazy(() => import("./views/Home"));
const SignInView = lazy(() => import("./views/account/SignIn"));
const SignUpView = lazy(() => import("./views/account/SignUp"));
const ForgotPasswordView = lazy(() => import("./views/account/ForgotPassword"));
const OrdersView = lazy(() => import("./views/account/Orders"));
const WishlistView = lazy(() => import("./views/account/Wishlist"));
const NotificationView = lazy(() => import("./views/account/Notification"));
const MyProfileView = lazy(() => import("./views/account/MyProfile"));
const AccountListView = lazy(() => import("./views/account/AccountList"));
const BirdListView = lazy(() => import("./views/bird/BirdList"));
const EditBird = lazy(() => import("./views/bird/EditBird"));
const BirdDetailView = lazy(() => import("./views/bird/Detail"));
const PostListView = lazy(() => import("./views/post/PostList"));
const TransactionListView = lazy(() => import("./views/transaction/TransactionList"));
const StarZoneView = lazy(() => import("./views/bird/StarZone"));
const CartView = lazy(() => import("./views/cart/Cart"));
const CheckoutView = lazy(() => import("./views/cart/Checkout"));
const InvoiceView = lazy(() => import("./views/cart/Invoice"));
const DocumentationView = lazy(() => import("./views/Documentation"));
const NotFoundView = lazy(() => import("./views/pages/404"));
const InternalServerErrorView = lazy(() => import("./views/pages/500"));
const ContactUsView = lazy(() => import("./views/pages/ContactUs"));
const SupportView = lazy(() => import("./views/pages/Support"));
const Message = lazy(() => import("./views/message/Message"));

function App() {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Suspense
          fallback={
            <div className="text-white text-center mt-3">Loading...</div>
          }
        >
          <div
            className="p-5 bg-primary bs-cover"
            style={{
              backgroundImage: "url(../../images/banner/bird-header.jpg)",
            }}
          >
            <Header />
          </div>
          <div class="row g-0">
            <div class="col-3 col-sm-2">
              <TopMenu />
            </div>
            <div class="col-9 col-md-10">
              <Routes>
                <Route path="/" element={<HomeView />} />
                <Route  path="/account/signin" element={<SignInView />} />
                <Route  path="/account/signup" element={<SignUpView />} />
                <Route
                  
                  path="/account/forgotpassword"
                  element={<ForgotPasswordView />}
                />
                <Route
                  
                  path="/account/profile"
                  element={<MyProfileView />}
                />
                <Route  path="/account/orders" element={<OrdersView />} />
                <Route
                  
                  path="/account/wishlist"
                  element={<WishlistView />}
                />
                <Route
                  
                  path="/account/notification"
                  element={<NotificationView />}
                />
                <Route  path="/category" element={<BirdListView />} />
                <Route  path="/post" element={<PostListView />} />
                <Route  path="/account" element={<AccountListView />} />
                <Route  path="/price" element={<PostPrice />} />
                <Route  path="/transaction" element={<TransactionListView />} />
                <Route  path="/bird/detail" element={<BirdDetailView />} />
                <Route  path="/editbird" element={<EditBird />} />
                <Route  path="/star/zone" element={<StarZoneView />} />
                <Route  path="/cart" element={<CartView />} />
                <Route  path="/checkout" element={<CheckoutView />} />
                <Route  path="/invoice" element={<InvoiceView />} />
                <Route
                  
                  path="/documentation"
                  element={<DocumentationView />}
                />
                <Route  path="/contact-us" element={<ContactUsView />} />
                <Route  path="/support" element={<SupportView />} />
                <Route
                  
                  path="/500"
                  element={<InternalServerErrorView />}
                />
                <Route
                  
                  path="/bird/detail/message"
                  element={<Message />}
                />
                <Route path="*" element={<NotFoundView />} />
              </Routes>
            </div>
          </div>
        </Suspense>
        <Footer />
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
