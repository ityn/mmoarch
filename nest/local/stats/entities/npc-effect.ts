import {Effect}                                 from "../../../../shared/interfaces/effect";
import {EffectTypes}                            from "../../../../shared/types/effect.types";
import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class NpcEffect implements Effect {
    @PrimaryGeneratedColumn()
    id: number
    @Column()
    npcId: number;
    @Column()
    potency: number;
    @Column()
    type: EffectTypes;

}
