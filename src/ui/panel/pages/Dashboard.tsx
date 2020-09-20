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
        width: "20vw",
        height: "95vh",
        title: "Dialog Title 2",
        url: "/panel/AdminApi/AdminRoleSearch",
        hideActions: true,
        addSelectField: true,
        defaultValues: { name: "default name" },
        hideFilters: true,
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
      <button onClick={openDialog} className="btn">
        open dialog
      </button>
      <br />
      <button onClick={openDrawer} className="btn">
        open drawer
      </button>
      <br />
      <button onClick={displayLoading} className="btn">
        display loading
      </button>
      <br />
      <button
        onClick={(e) =>
          addSnackbar({
            text: "info message",
            type: "info",
            duration: 0,
          })
        }
        className="btn"
      >
        info msg
      </button>
      <button
        onClick={(e) =>
          addSnackbar({
            text: "warning message",
            type: "warning",
            duration: 5,
          })
        }
        className="btn"
      >
        warning msg - close after 5sec
      </button>
      <button
        onClick={(e) =>
          addSnackbar({
            text: "error message",
            type: "danger",
          })
        }
        className="btn"
      >
        error msg
      </button>
      <button
        onClick={(e) =>
          addSnackbar({
            text: "success message",
            type: "success",
          })
        }
        className="btn"
      >
        success msg
      </button>
      <br />
      <button onClick={(e) => confirm()} className="btn">
        confirm
      </button>
    </div>
  );
}

export default Dashboard;
