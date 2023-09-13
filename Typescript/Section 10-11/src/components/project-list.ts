import {Component} from "./base-component";
import {Project, ProjectStatus} from "../models/project-model";
import {DragTarget} from "../models/drag-drop-interfaces";
import {ProjectItem} from "./project-item";
import {projectState} from "../state/project-state";
import {autobind} from "../decorators/autobind";
export class ProjectList extends Component<HTMLDivElement, HTMLElement> implements DragTarget {
    assignedProjects: Project[];

    constructor(private type: 'active' | 'finished') {
        super('project-list', 'app', false, `${type}-projects`);
        this.assignedProjects = [];
        this.configure();
        this.renderContent();
    }

    private renderObjects() {
        const listEl = document.getElementById(`${this.type}-projects-list`)! as HTMLUListElement;
        listEl.innerHTML = '';
        for (const project of this.assignedProjects) {
            new ProjectItem(this.element.querySelector('ul')!.id, project);
        }
    }

    configure() {
        this.element.addEventListener('dragover', this.dragOverHandler);
        this.element.addEventListener('dragleave', this.dragLeaveHandler);
        this.element.addEventListener('drop', this.dropHandler);

        projectState.addListener((projects: Project[]) => {
            const relevantPrj = projects.filter(pr => {
                if (this.type === 'active') {
                    return pr.status === ProjectStatus.Active;
                }
                return pr.status === ProjectStatus.Finished;
            })
            this.assignedProjects = relevantPrj;
            this.renderObjects();
        });
    }

    renderContent() {
        const listId = `${this.type}-projects-list`;
        this.element.querySelector('ul')!.id = listId;
        this.element.querySelector('h2')!.textContent = this.type.toUpperCase() + " PROJECTS ";
    }

    @autobind
    dragLeaveHandler(_: DragEvent) {
        const listEl = this.element.querySelector('ul')!;
        listEl.classList.remove('droppable');
    }

    @autobind
    dragOverHandler(event: DragEvent) {
        if (event.dataTransfer && event.dataTransfer.types[0] === 'text/plain') {
            event.preventDefault();
            const listEl = this.element.querySelector('ul')!;
            listEl.classList.add('droppable');
        }
    }

    @autobind
    dropHandler(event: DragEvent) {
        const prjId = event.dataTransfer!.getData('text/plain');
        projectState.moveProject(prjId, this.type === 'active' ? ProjectStatus.Active : ProjectStatus.Finished);
    }
}


