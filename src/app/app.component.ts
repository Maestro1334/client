import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

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
    private httpClient: HttpClient
  ) {}

  async ngOnInit() {
    await this.loadCompanies()
    await this.loadVacancies()
  }

  async loadCompanies() {
    this.companies = await this.httpClient.get<ICompany[]>('/api/companies').toPromise()
  }

  async loadVacancies() {
    this.vacancies = await this.httpClient.get<IVacancy[]>('/api/vacancies').toPromise()
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
