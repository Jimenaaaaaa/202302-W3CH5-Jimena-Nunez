export type ProtoCardStructure = {
  id: number;
  name: string;
  artwork: string;
  favourite: boolean;
};

export class CardStructure implements ProtoCardStructure {
  public favourite!: boolean;
  name!: string;
  artwork!: string;

  constructor(public id: number) {
    this.favourite = false;
  }
}
