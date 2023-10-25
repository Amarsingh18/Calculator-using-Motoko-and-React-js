import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';

export interface _SERVICE {
  'add' : ActorMethod<[bigint, bigint], bigint>,
  'divide' : ActorMethod<[bigint, bigint], bigint>,
  'multiply' : ActorMethod<[bigint, bigint], bigint>,
  'subtract' : ActorMethod<[bigint, bigint], bigint>,
}
