import ManagementTable from "../../components/muiTableTemplate/managementTable";
import staff from "../../api/staff";

// define columns for the table
const columns = [
  { field: "id", headerName: "Staff ID", width: 170 },
  { field: "name", headerName: "Name", width: 170 },
  { field: "email", headerName: "Email", width: 170 },
  { field: "dob", headerName: "Date of birth", width: 170 },
  { field: "branch", headerName: "Branch", width: 150 },
  {
    field: "add",
    headerName: "Add",
    width: 114,
    renderCell: (params) => (
      <div className="gap-[7px] flex flex-row">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
          >
            <path
              d="M19.5133 3.95741L16.4804 0.924437C16.1143 0.5583 15.6275 0.356689 15.1097 0.356689C14.592 0.356689 14.1053 0.5583 13.7392 0.924425L1.04304 13.6205C0.922538 13.741 0.844856 13.8977 0.821958 14.0666L0.088136 19.4728C0.0554268 19.714 0.1372 19.9565 0.309259 20.1285C0.456332 20.2756 0.654898 20.3567 0.860079 20.3567C0.894887 20.3567 0.929919 20.3544 0.964916 20.3496L6.3711 19.6158C6.54 19.5929 6.69672 19.5152 6.81722 19.3947L19.5133 6.69866C19.8795 6.33255 20.0811 5.84578 20.0811 5.32805C20.0811 4.81028 19.8794 4.32351 19.5133 3.95741ZM5.90123 18.1072L1.76977 18.6679L2.33056 14.5365L11.3274 5.53971L14.898 9.11039L5.90123 18.1072ZM18.4116 5.59686L15.9998 8.00861L12.4291 4.43794L14.8409 2.02621C14.9378 1.9293 15.0509 1.91482 15.1097 1.91482C15.1686 1.91482 15.2817 1.9293 15.3786 2.02621L18.4116 5.05918C18.5085 5.15607 18.5229 5.26921 18.5229 5.32802C18.5229 5.38682 18.5085 5.49996 18.4116 5.59686Z"
              fill="#BE2623"
            />
          </svg>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
          >
            <path
              d="M3.14844 5.35669H4.8151H18.1484"
              stroke="#A30D11"
              strokeWidth="1.89189"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7.31519 5.35677V3.6901C7.31519 3.24808 7.49078 2.82415 7.80334 2.51159C8.1159 2.19903 8.53982 2.02344 8.98185 2.02344H12.3152C12.7572 2.02344 13.1811 2.19903 13.4937 2.51159C13.8063 2.82415 13.9819 3.24808 13.9819 3.6901V5.35677M16.4819 5.35677V17.0234C16.4819 17.4655 16.3063 17.8894 15.9937 18.2019C15.6811 18.5145 15.2572 18.6901 14.8152 18.6901H6.48185C6.03982 18.6901 5.6159 18.5145 5.30334 18.2019C4.99078 17.8894 4.81519 17.4655 4.81519 17.0234V5.35677H16.4819Z"
              stroke="#A30D11"
              strokeWidth="1.89189"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8.98193 9.52319V14.5232"
              stroke="#A30D11"
              strokeWidth="1.89189"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.3149 9.52319V14.5232"
              stroke="#A30D11"
              strokeWidth="1.89189"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    ),
  },
];

// Define the rows for the table
const rows =
  staff && Array.isArray(staff)
    ? staff.map((item) => ({
        id: `#${item.id}`, // Thêm dấu # vào trước id
        name: item.name,
        email: item.email,
        dob: item.dob,
        branch: item.branch,
      }))
    : [];

const StaffManagement = () => {
  return (
    <div className="w-screen mx-auto">
      <div className="w-screen mx-auto flex flex-col gap-4 bg-[#F4F2EC] bg-[url('../../public/assets/background.svg')]">
        <div>
          <ManagementTable
            columns={columns}
            rows={rows}
            tableName="STAFF MANAGEMENT"
          />
        </div>
      </div>
    </div>
  );
};

export default StaffManagement;
