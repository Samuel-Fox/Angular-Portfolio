import { Injectable } from '@angular/core';
import { PROJECTS } from './mock-projects';
import { Project } from './Projects';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor() { }

  getProjects(): Project[] {
    return PROJECTS;
  }
}
