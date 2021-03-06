import Vue from "vue";
import Router from "vue-router";

// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router);

/* Layout */
import Layout from "../views/layout/Layout";

/**
 * hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
 *                                if not set alwaysShow, only more than one route under the children
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noredirect           if `redirect:noredirect` will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
  }
 **/
// export const constantRouterMap = [
//   {
//     path: "/login",
//     component: () => import("@/views/login/index"),
//     hidden: true
//   },
//   { path: "/404", component: () => import("@/views/404"), hidden: true },

//   {
//     path: "/",
//     component: Layout,
//     redirect: "/dashboard",
//     name: "Dashboard",
//     hidden: true,
//     children: [
//       {
//         path: "dashboard",
//         component: () => import("@/views/dashboard/index")
//       }
//     ]
//   },

//   {
//     path: "/example",
//     component: Layout,
//     redirect: "/example/table",
//     name: "Example",
//     meta: { title: "Example", icon: "example" },
//     children: [
//       {
//         path: "table",
//         name: "Table",
//         component: () => import("@/views/table/index"),
//         meta: { title: "Table", icon: "table" }
//       },
//       {
//         path: "tree",
//         name: "Tree",
//         component: () => import("@/views/tree/index"),
//         meta: { title: "Tree", icon: "tree" }
//       }
//     ]
//   },

//   {
//     path: "/form",
//     component: Layout,
//     children: [
//       {
//         path: "index",
//         name: "Form",
//         component: () => import("@/views/form/index"),
//         meta: { title: "Form", icon: "form" }
//       }
//     ]
//   },

//   {
//     path: "/nested",
//     component: Layout,
//     redirect: "/nested/menu1",
//     name: "Nested",
//     meta: {
//       title: "Nested",
//       icon: "nested"
//     },
//     children: [
//       {
//         path: "menu1",
//         component: () => import("@/views/nested/menu1/index"), // Parent router-view
//         name: "Menu1",
//         meta: { title: "Menu1" },
//         children: [
//           {
//             path: "menu1-1",
//             component: () => import("@/views/nested/menu1/menu1-1"),
//             name: "Menu1-1",
//             meta: { title: "Menu1-1" }
//           },
//           {
//             path: "menu1-2",
//             component: () => import("@/views/nested/menu1/menu1-2"),
//             name: "Menu1-2",
//             meta: { title: "Menu1-2" },
//             children: [
//               {
//                 path: "menu1-2-1",
//                 component: () =>
//                   import("@/views/nested/menu1/menu1-2/menu1-2-1"),
//                 name: "Menu1-2-1",
//                 meta: { title: "Menu1-2-1" }
//               },
//               {
//                 path: "menu1-2-2",
//                 component: () =>
//                   import("@/views/nested/menu1/menu1-2/menu1-2-2"),
//                 name: "Menu1-2-2",
//                 meta: { title: "Menu1-2-2" }
//               }
//             ]
//           },
//           {
//             path: "menu1-3",
//             component: () => import("@/views/nested/menu1/menu1-3"),
//             name: "Menu1-3",
//             meta: { title: "Menu1-3" }
//           }
//         ]
//       },
//       {
//         path: "menu2",
//         component: () => import("@/views/nested/menu2/index"),
//         meta: { title: "menu2" }
//       }
//     ]
//   },

//   {
//     path: "external-link",
//     component: Layout,
//     children: [
//       {
//         path: "https://panjiachen.github.io/vue-element-admin-site/#/",
//         meta: { title: "External Link", icon: "link" }
//       }
//     ]
//   },

//   { path: "*", redirect: "/404", hidden: true }
// ];
export const constantRouterMap = [
  {
    path: "/login",
    component: () => import("@/views/login/index"),
    hidden: true
  },
  { path: "/404", component: () => import("@/views/404"), hidden: true },
  {
    path: "/",
    component: Layout,
    redirect: "/dashboard",
    name: "Dashboard",
    hidden: true,
    children: [
      {
        path: "dashboard",
        component: () => import("@/views/dashboard/index")
      }
    ]
  },
  // ????????????
  {
    path: "/teacher",
    component: Layout,
    redirect: "/teacher/list",
    name: "Teacher",
    meta: { title: "????????????" },
    children: [
      {
        path: "list",
        name: "TeacherList",
        component: () => import("@/views/teacher/list"),
        meta: { title: "????????????" }
      },
      {
        path: "create",
        name: "TeacherCreate",
        component: () => import("@/views/teacher/form"),
        meta: { title: "????????????" }
      },
      {
        path: "edit/:id",
        name: "TeacherEdit",
        component: () => import("@/views/teacher/form"),
        meta: { title: "????????????" },
        hidden: true
      }
    ]
  },
  // ??????????????????
  {
    path: "/subject",
    component: Layout,
    redirect: "/subject/list",
    name: "Subject",
    meta: { title: "??????????????????" },
    children: [
      {
        path: "list",
        name: "SubjectList",
        component: () => import("@/views/subject/list"),
        meta: { title: "??????????????????" }
      },
      {
        path: "import",
        name: "SubjectImport",
        component: () => import("@/views/subject/import"),
        meta: { title: "??????????????????" }
      }
    ]
  },
  // ????????????
  {
    path: "/course",
    component: Layout,
    redirect: "/course/list",
    name: "Course",
    meta: { title: "????????????" },
    children: [
      {
        path: "list",
        name: "CourseList",
        component: () => import("@/views/course/list"),
        meta: { title: "????????????" }
      },
      {
        path: "info",
        name: "CourseInfo",
        component: () => import("@/views/course/form"),
        meta: { title: "????????????" }
      },
      {
        path: "info/:id",
        name: "CourseInfoEdit",
        component: () => import("@/views/course/form"),
        meta: { title: "????????????" },
        hidden: true
      },
      {
        path: "chapter/:id",
        name: "CourseChapterEdit",
        component: () => import("@/views/course/form"),
        meta: { title: "????????????" },
        hidden: true
      }
    ]
  },
  // ????????????
  {
    path: "/ad",
    component: Layout,
    redirect: "/ad/list",
    name: "Ad",
    meta: { title: "????????????" },
    children: [
      {
        path: "list",
        name: "AdList",
        component: () => import("@/views/ad/list"),
        meta: { title: "????????????" }
      },
      {
        path: "create",
        name: "AdCreate",
        component: () => import("@/views/ad/form"),
        meta: { title: "??????????????????" },
        hidden: true
      },
      {
        path: "edit/:id",
        name: "AdEdit",
        component: () => import("@/views/ad/form"),
        meta: { title: "??????????????????" },
        hidden: true
      },

      {
        path: "type-list",
        name: "AdTypeList",
        component: () => import("@/views/adType/list"),
        meta: { title: "?????????" }
      },
      {
        path: "type-create",
        name: "AdTypeCreate",
        component: () => import("@/views/adType/form"),
        meta: { title: "???????????????" },
        hidden: true
      },
      {
        path: "type-edit/:id",
        name: "AdTypeEdit",
        component: () => import("@/views/adType/form"),
        meta: { title: "???????????????" },
        hidden: true
      }
    ]
  },
  {
    path: "/statistics",
    component: Layout,
    redirect: "/statistics/create",
    name: "Statistics",
    meta: { title: "????????????" },
    children: [
      {
        path: "create",
        name: "StatisticsCreate",
        component: () => import("@/views/statistics/create"),
        meta: { title: "????????????" }
      },
      {
        path: "chart",
        name: "StatisticsChart",
        component: () => import("@/views/statistics/chart"),
        meta: { title: "????????????" }
      }
    ]
  },
  { path: "*", redirect: "/404", hidden: true }
];

export default new Router({
  // mode: 'history', //??????????????????
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
});
