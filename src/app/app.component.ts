import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  selectedProject;
  selectedProperty;
  product;

  projects = [
    {
      key: 1, value: "Project one",
    },
    {
      key: 2, value: "Project two",
    },
    {
      key: 3, value: "Project three",
    }
  ]

  propertyCode = [
    {
      key: 101, value: "PC101",
    },
    {
      key: 102, value: "PC102",
    },
    {
      key: 103, value: "PC103",
    }
  ]

  changeProject(e) {
    if (e.target.value == 1) {
      console.log("Project One");
    }
    else if (e.target.value == 2) {
      console.log("Project Two");
    }
    else if (e.target.value == 3) {
      console.log("Project Three");
    }
    this.setProducts();
  }

  changePropertyCode(e) {
    if (e.target.value == 101) {
      console.log("PC101");
    }
    else if (e.target.value == 102) {
      console.log("PC102");
    }
    else if (e.target.value == 103) {
      console.log("PC103");
    }
    console.log(this.selectedProject);
    console.log(this.selectedProperty);
    this.setProducts();
  }

  private setProducts() {
    if ((this.selectedProject === "Project two" && this.selectedProperty === 'PC103') || (this.selectedProject === "Project three" && this.selectedProperty === 'PC102')) {

      let potentialProduct = [
        {
          key: 123, value: `${this.selectedProperty}PROD123`,
        },
        {
          key: 456, value: `${this.selectedProperty}PROD456`,
        },
        {
          key: 789, value: `${this.selectedProperty}PROD789`,
        }
      ]

      this.product = potentialProduct;
    } else {
      this.product = [];
    }
  }

}
