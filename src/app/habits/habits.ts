import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HabitsService } from './habits.service';

@Component({
  selector: 'app-habits',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './habits.html'
})
export class Habits {
  reportForm: FormGroup;
  submitted = false;
  successMessage = '';

  constructor(
    private fb: FormBuilder,
    private habitsService: HabitsService
  ) {
    this.reportForm = this.fb.group({
      name: [''],
      description: ['']
    });
  }

  onSubmit() {
    this.submitted = true;

    if (this.reportForm.valid) {
      this.habitsService.createReport(this.reportForm.value).subscribe(() => {
        this.successMessage = 'Reporte enviado exitosamente ✅';
        this.reportForm.reset();
        this.submitted = false;
      });
    }
  }
}
