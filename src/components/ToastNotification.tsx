import { useEffect, useRef } from "react";
import { Toast } from "bootstrap";

const ToastNotification = ({ message }: { message: string }) => {
  const toastRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (message && toastRef.current) {
      new Toast(toastRef.current).show();
    }
  }, [message]);

  return (
    <div className="position-relative">
      <div className="top-0 end-0 p-3">
        <div
          ref={toastRef}
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
          className="toast text-bg-danger"
          data-bs-autohide="false"
        >
          <div className="toast-body d-flex justify-content-between">
            {message}
            <button
              type="button"
              className="btn-close white"
              data-bs-dismiss="toast"
              aria-label="Close"
            ></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToastNotification;
