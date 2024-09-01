import { Component, Input } from "@angular/core";

@Component({
  selector: "app-custom-button",
  templateUrl: "./custom-button.component.html",
})
export class CustomButtonComponent {
  @Input()
  public theme: BUTTON_THEME = "primary";

  public getStyles(): string {
    if (this.theme === "primary") {
      return " text-white bg-blue-600 hover:bg-blue-500";
    }
    if (this.theme === "outlined") {
      return "text-gray-900 bg-white hover:hover:bg-gray-50 ring-1 ring-inset ring-gray-300";
    }
    return "";
  }
}

type BUTTON_THEME = "primary" | "outlined";
