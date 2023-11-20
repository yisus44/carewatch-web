import { DeleteUserGroup } from "../../ui/pages/DeleteUserGroup";
import { MultiStepForm } from "../../ui/pages/JoinToGroup";

export const userGroupRouter = [
  {
    path: "/join/:userGroupToken",
    element: <MultiStepForm />,
  },
  {
    path: "/delete/:userGroupToken",
    element: <DeleteUserGroup />,
  },
];
