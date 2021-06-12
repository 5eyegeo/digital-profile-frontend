import React, {useState} from "react";
import RemoveRedEyeIcon from "@material-ui/icons/RemoveRedEye";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import GroupForm from "./GroupForm";
import StyledPopup from "../../Reusable/StyledPopup";
import StyledActionButton from "../../Reusable/StyledActionButton";
import StyledConfirmDialog from "../../Reusable/StyledConfirmDialog";
import GroupEditForm from "./GroupEditForm";
import GroupAddForm from "./GroupAddForm";
import StyledMuiDataTable from "../../Reusable/StyledMuiDataTable";

const GroupList = (props) => {
  const {groupData, isDataLoading} = props
  // const {
  //   permissionsData,
  //   groupData,
  //   groupDataLoading,
  //   handleGroupCreation,
  //   handleGroupDeletion,
  //   openPopup,
  //   setOpenPopup,
  //   isDataDeleting,
  //   confirmDialog,
  //   setConfirmDialog,
  //   formInitialValue,
  //   setFormInitialValue,
  //   handleSelectedPermission,
  //   groupsOptions,
  //   permissions,
  //   selected,
  //   setSelected
  // } = props

  const [openEditGroupPopup, setOpenEditGroupPopup] = useState(false)
  console.log(groupData)

  const columns = [
    {
      label: 'Name',
      name: "name",
      options: {
        filter: true,
        sort: true
      },
    },
    {
      label: "Parent",
      name: "parent_name",
      options: {
        filter: true,
        sort: true,
        customBodyRender: (value) => {
          return (
            <>
              {value ? value : 'N/A'}
            </>
          );
        },

      },
    },
    {
      label: "Actions",
      name: "id",
      options: {
        filter: false,
        sort: false,
        empty: true,
        customBodyRender: (value) => {
          return (
            <>
              <StyledActionButton link={`/group-detail/${value}`}>
                <RemoveRedEyeIcon/>
              </StyledActionButton>
              <StyledActionButton>
                <EditIcon onClick={() => setOpenEditGroupPopup(true)}/>
              </StyledActionButton>
              <StyledActionButton>
                <DeleteIcon onClick={() => {
                  setConfirmDialog({
                    isOpen: true,
                    title: `Are you sure to delete this group?`,
                    subTitle: "You can't undo this operation",
                    onConfirm: () => {
                      handleGroupDeletion(value)
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
    responsive: "standard",
    selectableRows: "none",
    onColumnSortChange: (changedColumn, direction) =>
      console.log("changedColumn: ", changedColumn, "direction: ", direction),
    onChangeRowsPerPage: (numberOfRows) =>
      console.log("numberOfRows: ", numberOfRows),
    onChangePage: (currentPage) => console.log("currentPage: ", currentPage),
    onRowsDelete: (rowsDeleted, dataRows) => {
      const idsToDelete = rowsDeleted.data.map(d => groupData[d.dataIndex].id);
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
        isLoading={isDataLoading}
        data={groupData}
        columns={columns}
        title={"Group List"}
        options={options}
      />
      {/*<StyledPopup*/}
      {/*  title="Add Group"*/}
      {/*  openPopup={openPopup}*/}
      {/*  setOpenPopup={setOpenPopup}*/}
      {/*>*/}
      {/*  <GroupAddForm*/}
      {/*    setOpenPopup={setOpenPopup}*/}
      {/*    handleGroupCreation={handleGroupCreation}*/}
      {/*    formInitialValue={formInitialValue}*/}
      {/*    setFormInitialValue={setFormInitialValue}*/}
      {/*    handleSelectedPermission={handleSelectedPermission}*/}
      {/*    groupsOptions={groupsOptions}*/}
      {/*    permissions={permissions}*/}
      {/*    selected={selected}*/}
      {/*    setSelected={setSelected}*/}
      {/*  />*/}
      {/*</StyledPopup>*/}

      {/*<StyledPopup*/}
      {/*  title="Edit Group"*/}
      {/*  openPopup={openEditGroupPopup}*/}
      {/*  setOpenPopup={setOpenEditGroupPopup}*/}
      {/*>*/}
      {/*  <GroupEditForm*/}
      {/*    setOpenPopup={setOpenPopup}*/}
      {/*    handleGroupCreation={handleGroupCreation}*/}
      {/*    formInitialValue={formInitialValue}*/}
      {/*    setFormInitialValue={setFormInitialValue}*/}
      {/*    handleSelectedPermission={handleSelectedPermission}*/}
      {/*    groupsOptions={groupsOptions}*/}
      {/*    permissions={permissions}*/}
      {/*    selected={selected}*/}
      {/*    setSelected={setSelected}*/}
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

export default GroupList;