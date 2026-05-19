import { createBrowserRouter } from "react-router";
import { LandingPage } from "./pages/LandingPage";
import { RegistrationPage } from "./pages/RegistrationPage";
import { LoginPage } from "./pages/LoginPage";
import { StudentDashboard } from "./pages/StudentDashboard";
import { CartPage } from "./pages/CartPage";
import { AdminDashboard } from "./pages/AdminDashboard";
import { CategoryProductsPage } from "./pages/CategoryProductsPage";
import { SellItemPage } from "./pages/SellItemPage";
import { NotificationsPage } from "./pages/NotificationsPage";
import { ReviewPage } from "./pages/ReviewPage";
import { EmailNotificationPage } from "./pages/EmailNotificationPage";
import { RefundRequestPage } from "./pages/RefundRequestPage";
import { DeliveryTrackingPage } from "./pages/DeliveryTrackingPage";
import { DocumentUploadPage } from "./pages/DocumentUploadPage";
import { ChatRoomPage } from "./pages/ChatRoomPage";
import { ReportPage } from "./pages/ReportPage";
import { ReceiptPage } from "./pages/ReceiptPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: LandingPage,
  },
  {
    path: "/register",
    Component: RegistrationPage,
  },
  {
    path: "/login",
    Component: LoginPage,
  },
  {
    path: "/dashboard",
    Component: StudentDashboard,
  },
  {
    path: "/cart",
    Component: CartPage,
  },
  {
    path: "/admin",
    Component: AdminDashboard,
  },
  {
    path: "/category/:category",
    Component: CategoryProductsPage,
  },
  {
    path: "/sell",
    Component: SellItemPage,
  },
  {
    path: "/notifications",
    Component: NotificationsPage,
  },
  {
    path: "/review/:productId",
    Component: ReviewPage,
  },
  {
    path: "/settings/email-notifications",
    Component: EmailNotificationPage,
  },
  {
    path: "/refund-request",
    Component: RefundRequestPage,
  },
  {
    path: "/delivery-tracking",
    Component: DeliveryTrackingPage,
  },
  {
    path: "/documents",
    Component: DocumentUploadPage,
  },
  {
    path: "/chat",
    Component: ChatRoomPage,
  },
  {
    path: "/report",
    Component: ReportPage,
  },
  {
    path: "/receipt/:orderId",
    Component: ReceiptPage,
  },
]);
