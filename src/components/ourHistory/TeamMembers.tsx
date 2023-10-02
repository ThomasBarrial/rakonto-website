import React from 'react';
import Image from 'next/image';
import { ITeam } from '../../../types';
import H3 from '../global/text/H3';
import BasicText from '../global/text/BasicText';
import urlForImage from '../../../sanity/lib/image';
import H1 from '../global/text/H1';

interface IProps {
  team: ITeam[];
}

function TeamMembers({ team }: IProps) {
  return (
    <div className="mt-10 lg:mt-52 lg:mx-52">
      <H1
        className="text-center"
        contentEn="la team derrière l’asso"
        contentFr="la team derrière l’asso"
      />
      <div className="mt-5 lg:mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {team.map((member) => (
          <div key={member._id}>
            <div className=" relative w-full h-96">
              <Image
                className="object-cover"
                src={urlForImage(member.profilPicture.asset).url()}
                fill
                alt="notre aventure"
                priority
              />
            </div>
            <div className=" flex  justify-between mt-2">
              <H3
                className="text-primary"
                contentEn={member.firstName}
                contentFr={member.firstName}
              />
              <BasicText
                className="text-primary"
                contentEn={member.roleEn}
                contentFr={member.roleFr}
              />
            </div>
            <BasicText
              contentEn={member.descriptionEn}
              contentFr={member.descriptionFr}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default TeamMembers;
