import { Component, Input } from "@angular/core";

@Component({
  selector: "app-custom-button",
  templateUrl: "./custom-button.component.html",
  styles: `
    :host {
      display: flex;
    }
  `,
})
export class CustomButtonComponent {
  @Input()
  public theme: BUTTON_THEME = "primary";

  public getStyles(): string {
    if (this.theme === "primary") {
      return "text-white bg-blue-600 hover:bg-blue-500";
    }
    if (this.theme === "outlined") {
      return "text-gray-900 bg-white hover:hover:bg-gray-50 ring-1 ring-inset ring-gray-300";
    }
    if (this.theme === "danger") {
      return "text-white bg-red-600 hover:bg-red-500";
    }
    if (this.theme === "success") {
      return "text-white bg-green-600 hover:bg-green-500";
    }
    return "";
  }
}

type BUTTON_THEME = "primary" | "outlined" | "danger" | "success";
