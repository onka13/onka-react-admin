import { Button } from "@material-ui/core";
import { UIManager, Snackbar } from "onka-react-admin-core";
import React from "react";

function Dashboard() {
  function openDialog() {
    UIManager.instance().dialog.open(
      {
        title: "Dialog Title",
        content: "Lorem ipsum content",
        actions: [
          { label: "Yes", value: true },
          { label: "No", value: false },
        ],
      },
      (res: any) => {
        console.log("dialog res", res);
      },
      {
        small: true,
        hasBackdrop: true,
        closable: true,
        expandableContent: true
      }
    );
  }
  function openDrawer() {
    UIManager.instance().dialog.open(
      {
        width: "40vw",
        height: "95vh",
        title: "Users",
        url: "/panel/AdminApi/AdminUserSearch",
        hideActions: true,
        addSelectField: true,
        defaultValues: { name: "admin" },
        hideFilters: false,
      },
      (res: any) => {
        console.log("dialog res", res);
      },
      {
        hasBackdrop: false,
        justifyContent: "flex-end",
        closable: true,
      }
    );
  }
  function displayLoading() {
    UIManager.instance().displayLoading(true);
    setTimeout(() => {
      UIManager.instance().displayLoading(false);
    }, 5000);
  }
  function addSnackbar(snack: Snackbar) {
    UIManager.instance().snackbar.add(snack);
  }
  function confirm() {
    UIManager.instance().confirm(
      {
        title: "Confirm title",
        content: "Confirm desc",
      },
      (response) => {
        console.log("confirm response", response);
      }
    );
  }
  return (
    <div>
      <div className="progress">
        <div className="progress-bar bg-danger widthloop"></div>
      </div>
      Dashboard
      <br />
      <Button onClick={openDialog}>
        open dialog
      </Button>
      <br />
      <Button onClick={openDrawer}>
        open drawer
      </Button>
      <br />
      <Button onClick={displayLoading}>
        display loading
      </Button>
      <br />
      <Button
        onClick={(e) =>
          addSnackbar({
            text: "info message",
            type: "info",
            duration: 0,
          })
        }
       
      >
        info msg
      </Button>
      <Button
        onClick={(e) =>
          addSnackbar({
            text: "warning message",
            type: "warning",
            duration: 5,
          })
        }
       
      >
        warning msg - close after 5sec
      </Button>
      <Button
        onClick={(e) =>
          addSnackbar({
            text: "error message",
            type: "danger",
          })
        }
       
      >
        error msg
      </Button>
      <Button
        onClick={(e) =>
          addSnackbar({
            text: "success message",
            type: "success",
          })
        }
       
      >
        success msg
      </Button>
      <br />
      <Button onClick={(e) => confirm()}>
        confirm
      </Button>
    </div>
  );
}

export default Dashboard;
