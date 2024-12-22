import Home from '../pages/Home';
import Homework from '../components/Layout/DefautLayout/Homework';
import Lession from '../components/Layout/DefautLayout/Lession/lession';
import Test from '../components/Layout/DefautLayout/Test/test';
import Solution from '../components/Layout/DefautLayout/Solution/solution';
import Admin from '../pages/Admin';
const publicRoutes = [
    { path: '/homework', component: Homework, title: 'Bài tập về nhà' },
    { path: '/lession', component: Lession, title: 'Bài giảng' },
    { path: '/solution', component: Solution, title: 'Bài giải' },
    { path: '/test', component: Test, title: 'Bài kiểm tra' },
    { path: '/admin', component: Admin },
];

const adminRoutes = [
    { path: '/addhomework', component: Homework, title: 'Thêm bài tập về nhà' },
    { path: '/addlession', component: Lession, title: 'Thêm bài giảng' },
    { path: '/addsolution', component: Solution, title: 'Thêm bài giải' },
    { path: '/addtest', component: Test, title: 'Thêm bài kiểm tra' },
];

export { publicRoutes, adminRoutes };
