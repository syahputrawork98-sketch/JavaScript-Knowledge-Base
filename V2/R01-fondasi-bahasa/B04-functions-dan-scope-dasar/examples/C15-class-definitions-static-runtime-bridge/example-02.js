// C15 - Class Definitions Static Runtime Bridge
// Nama internal class expression hidup di dalam body class.

const Widget = class InternalWidget {
  static create() {
    return new InternalWidget();
  }

  getDebugName() {
    return InternalWidget.name;
  }
};

const widget = Widget.create();
console.log('Widget.name =', Widget.name);
console.log('widget.getDebugName() =', widget.getDebugName());

try {
  console.log(InternalWidget);
} catch (error) {
  console.log('outer access =>', error.name, '->', error.message);
}
