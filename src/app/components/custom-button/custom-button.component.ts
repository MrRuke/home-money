import { ChangeDetectionStrategy, Component, input } from "@angular/core";

@Component({
    selector: "app-custom-button",
    templateUrl: "./custom-button.component.html",
    styles: `
    :host {
      display: flex;
    }
  `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class CustomButtonComponent {
    public theme = input.required<BUTTON_THEME>();

    public getStyles(): string {
        switch (this.theme()) {
            case "primary":
                return "text-white bg-blue-600 hover:bg-blue-500";
            case "outlined":
                return "text-gray-900 bg-white hover:hover:bg-gray-50 ring-1 ring-inset ring-gray-300";
            case "danger":
                return "text-white bg-red-600 hover:bg-red-500";
            case "success": 
                return "text-white bg-green-600 hover:bg-green-500";
            default:
                return "";
        }
    }
}

type BUTTON_THEME = "primary" | "outlined" | "danger" | "success";
