import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';


interface ICompany
{
  id: number
  name: string
  address: string
}

interface IVacancy
{
  id: number
  title: string
  description: string
  createdAt: Date
  company: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public companies: ICompany[] = []

  public vacancies: IVacancy[] = []


  constructor (
    private apiService: ApiService
  ) {}

  async ngOnInit() {
    await this.loadCompanies()
    await this.loadVacancies()
  }

  async loadCompanies() {
    this.companies = await this.apiService.getAllCompanies().toPromise()
  }

  async loadVacancies() {
    this.vacancies = await this.apiService.getAllVacancies().toPromise()
  }


  // async addPost()
  // {
  //   await this.httpClient.post('/api/companies', {
  //     name: this.companyName,
  //     address: this.companyAddress
  //   }).toPromise()
  //   await this.loadCompanies()
  //   this.companyName = ""
  //   this.companyAddress = ""
  // }
}
