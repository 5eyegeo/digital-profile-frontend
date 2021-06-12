import React from 'react';
import StyledMuiDataTable from "../../Reusable/StyledMuiDataTable";
import StyledActionButton from "../../Reusable/StyledActionButton";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import CancelIcon from '@material-ui/icons/Cancel';
import PersonAddDisabledIcon from '@material-ui/icons/PersonAddDisabled';
import RemoveRedEyeIcon from "@material-ui/icons/RemoveRedEye";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

const UserList = (props) => {
  const {isLoading, userData} = props
  const columns = [
    {
      label: "Email",
      name: "email",
      options: {
        filter: true,
      },
    },
    {
      label: "Username",
      name: "username",
      options: {
        filter: true,
      },
    },
    {
      label: "Mobile Number",
      name: "mobile_number",
      options: {
        filter: false,
      },
    },
    {
      label: 'Active Status',
      name: "is_active",
      options: {
        filter: false,
        sort: true,
        empty: true,
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <>
              {value ? <CheckCircleOutlineIcon/> : <CancelIcon/>}
            </>
          );
        },
      },
    },
    {
      label: 'QR Code',
      name: "profile.get_qr_code.image_base64",
      options: {
        filter: false,
        sort: false,
        empty: true,
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <>
              {value ? (
                <img
                  src={`data:image/png;base64, ${value}`}
                  alt="QR Code" style={{height: `34px`}}/>
              ) : <PersonAddDisabledIcon/>}

            </>
          );
        },
      },
    },
    {
      label: 'Actions',
      name: "id",
      options: {
        filter: false,
        sort: false,
        empty: true,
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <>
              <StyledActionButton link={`/users/profile/${value}`}>
                <RemoveRedEyeIcon/>
              </StyledActionButton>
              <StyledActionButton link={`/users/edit/${value}`}>
                <EditIcon/>
              </StyledActionButton>
              <StyledActionButton>
                <DeleteIcon onClick={() => {
                  setConfirmDialog({
                    isOpen: true,
                    title: `Are you sure to delete this user?`,
                    subTitle: "You can't undo this operation",
                    onConfirm: () => {
                      // const newUserData = userData.filter(item => value !== item.id)
                      onDelete(value)
                    }
                  })
                }}/>
              </StyledActionButton>
            </>
          );
        },
      },
    },
  ];

  const options = {
    filter: true,
    filterType: "dropdown",
    selectableRows: "none",
    responsive: "standard",
    enableNestedDataAccess: '.',
    onColumnSortChange: (changedColumn, direction) =>
      console.log("changedColumn: ", changedColumn, "direction: ", direction),
    onChangeRowsPerPage: (numberOfRows) =>
      console.log("numberOfRows: ", numberOfRows),
    onChangePage: (currentPage) => console.log("currentPage: ", currentPage),
    onRowsDelete: (rowsDeleted, dataRows) => {
      const idsToDelete = rowsDeleted.data.map(d => userData[d.dataIndex].id);
      console.log(idsToDelete)

    },
    customToolbar: () => {
      return (
        <span>
          <StyledActionButton>
            <AddCircleOutlineIcon onClick={() => setOpenPopup(true)}/>
          </StyledActionButton>
        </span>
      );
    },
  };

  return (
    <>
      <StyledMuiDataTable
        isLoading={isLoading}
        data={userData}
        columns={columns}
        title={"User List"}
        options={options}
      />
      {/*<StyledPopup*/}
      {/*  title="Add User"*/}
      {/*  openPopup={openPopup}*/}
      {/*  setOpenPopup={setOpenPopup}*/}
      {/*>*/}
      {/*  <UserForm*/}
      {/*    setOpenPopup={setOpenPopup}*/}
      {/*    handleUserCreation={handleUserCreation}*/}
      {/*  />*/}
      {/*</StyledPopup>*/}
      {/*<StyledConfirmDialog*/}
      {/*  isDataDeleting={isDataDeleting}*/}
      {/*  confirmDialog={confirmDialog}*/}
      {/*  setConfirmDialog={setConfirmDialog}*/}
      {/*/>*/}
    </>
  );
};

export default UserList;