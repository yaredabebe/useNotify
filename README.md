# useNotify

A simple, lightweight notification hook for React applications.

`useNotify` provides an easy way to create success, error, warning, and information notifications with automatic dismissal and manual control.

## Installation

```bash
npm install usenotify
```

## Usage

```jsx
import { useNotify } from "usenotify";

function App() {
  const {
    notifications,
    success,
    error,
    warning,
    info,
    dismiss,
    dismissAll,
  } = useNotify();

  return (
    <div>
      <button onClick={() => success("Successfully saved!")}>
        Success
      </button>

      <button onClick={() => error("Something went wrong!")}>
        Error
      </button>

      <button onClick={() => warning("Please check your input.")}>
        Warning
      </button>

      <button onClick={() => info("New update available.")}>
        Info
      </button>

      {notifications.map((notification) => (
        <div key={notification.id}>
          <strong>{notification.type}</strong>
          <p>{notification.message}</p>

          <button onClick={() => dismiss(notification.id)}>
            Dismiss
          </button>
        </div>
      ))}

      <button onClick={dismissAll}>
        Dismiss All
      </button>
    </div>
  );
}
```

## Notification Types

### Success

```js
success("Profile updated successfully!");
```

### Error

```js
error("Failed to save changes.");
```

### Warning

```js
warning("Your session will expire soon.");
```

### Info

```js
info("A new version is available.");
```

## Custom Duration

The default notification duration is 3 seconds.

You can provide a custom duration:

```js
success("Saved!", 5000);
```

Set the duration to `0` to keep the notification until it is manually dismissed:

```js
error("This notification will stay open.", 0);
```

## Dismiss Notifications

Dismiss a single notification:

```js
dismiss(notification.id);
```

Dismiss all notifications:

```js
dismissAll();
```

## API

| Method          | Description                        |
| --------------- | ---------------------------------- |
| `notify()`      | Create a notification              |
| `success()`     | Create a success notification      |
| `error()`       | Create an error notification       |
| `warning()`     | Create a warning notification      |
| `info()`        | Create an information notification |
| `dismiss()`     | Remove one notification            |
| `dismissAll()`  | Remove all notifications           |
| `notifications` | Array of active notifications      |

## Notification Object

Each notification contains:

```js
{
  id: "unique-id",
  message: "Your message",
  type: "success"
}
```

Supported types:

* `success`
* `error`
* `warning`
* `info`

## Features

* Lightweight React hook
* Success, error, warning, and info notifications
* Automatic dismissal
* Custom notification duration
* Manual dismissal
* Dismiss all notifications
* No external notification library required

## License

MIT

