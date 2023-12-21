import toast from "react-hot-toast";

const successStyle = {
  duration: 2500,
  position: "top-center",
  icon: "👏",
  ariaProps: {
    role: "status",
    "aria-live": "polite",
  },
  style: {
    marginTop: "64px",
    margin: 0,
    padding: 16,
  },
};

export const successNotification = () => {
  toast.success("Done!", successStyle);
};

export const errorNotification = () => {
  toast.error("Recuerda introducir los datos!", successStyle);
};
