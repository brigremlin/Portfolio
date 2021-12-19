export class Projects {
  constructor(
    public name: string,
    public image: string,
    public about: string,
    public url: string,
    public id?: number,
    public programs?: string[]
  ) {}

}
