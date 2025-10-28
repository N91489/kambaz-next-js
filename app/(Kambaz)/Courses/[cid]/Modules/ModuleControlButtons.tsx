import "bootstrap-icons/font/bootstrap-icons.css";

export default function ModuleControlButtons({
  moduleId,
  deleteModule,
  editModule,
}: {
  moduleId: string;
  deleteModule: (moduleId: string) => void;
  editModule: (moduleId: string) => void;
}) {
  return (
    <div>
      <i
        className="bi bi-pencil"
        onClick={() => editModule(moduleId)}
        style={{ cursor: "pointer", marginRight: "10px", color: "#0d6efd" }}
        title="Edit module"
      ></i>
      <i
        className="bi bi-trash"
        onClick={() => {
          if (window.confirm("Are you sure you want to delete this module?")) {
            deleteModule(moduleId);
          }
        }}
        style={{ cursor: "pointer", marginRight: "10px", color: "#dc3545" }}
        title="Delete module"
      ></i>
      <i
        className="bi bi-plus-circle"
        style={{ marginRight: "10px", cursor: "pointer" }}
      ></i>
      <i className="bi bi-three-dots-vertical"></i>
    </div>
  );
}
