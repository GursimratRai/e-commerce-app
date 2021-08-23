//antd component
import { notification } from "antd";

//function for handling / showing notification or alert
export function notify(type, data) {
    if (type === "success") {
      notification.success({
        message: data,
        style: {
          borderRadius: 5,
          backgroundColor: "#9cda7e",
          borderColor: "#2f6316",
        },
      });
    } else {
      notification.error({
        message: data,
        style: {
          borderRadius: 5,
          backgroundColor: "#e89795",
          borderColor: "#880411",
        },
      });
    }
  }
  