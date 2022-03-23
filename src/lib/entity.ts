import { Uuid } from '@libs/uuid-lib';

export class Entity <T> {
  private readonly identity: Uuid;

  protected constructor(params: T, identity?: string) {
    this.identity = identity ? new Uuid(identity) : Uuid.generate();
    Object.assign(this, params);
  }

  public get id(): Uuid {
    return this.identity;
  }

  public equal(entity: Entity<T>): boolean {
    return this.identity.equal(entity.id);
  }
}
