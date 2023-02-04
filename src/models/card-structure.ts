export type ProtoCardStructure = {
  id: number;
  name: string;
  artwork: string;
  favourite: boolean;
};

export class CardStructure implements ProtoCardStructure {
  public favourite!: boolean;
  // public name!: string;
  // public artwork!: string;
  public id!: number;

  constructor(public name: string, public artwork: string) {
    this.favourite = false;
  }
}
