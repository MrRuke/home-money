import { Component, Output, EventEmitter, inject, output } from "@angular/core";
import { UntypedFormBuilder, Validators } from "@angular/forms";
import { CategoryRequest } from "@app/apis/categories/models";

@Component({
    selector: "app-create-category",
    templateUrl: "./create-category.component.html",
    styleUrls: ["./create-category.component.scss"],
    standalone: false
})
export class CreateCategoryComponent {
  private formBuilder = inject(UntypedFormBuilder);

  public readonly nameControl = this.formBuilder.control("", [
    Validators.required,
    Validators.maxLength(32),
  ]);
  public readonly limitControl = this.formBuilder.control(1, [
    Validators.required,
    Validators.min(1),
    Validators.max(999999),
  ]);
  public readonly formGroup = this.formBuilder.group({
    name: this.nameControl,
    limit: this.limitControl,
  });
  
  public categorySubmitted = output<CategoryRequest>();

  public handleSubmit(): void {
    if (this.formGroup.invalid) {
      this.nameControl.markAsDirty();
      this.limitControl.markAsDirty();
      return;
    }

    this.categorySubmitted.emit(this.formGroup.value);
    // TODO
    this.formGroup.reset();
    this.nameControl.reset();
    this.limitControl.reset();
  }
}
