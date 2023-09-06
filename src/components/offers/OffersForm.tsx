/* eslint-disable jsx-a11y/label-has-associated-control */

'use client';

import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import axios from 'axios';
import { useSelectedLanguagesFromStore } from '@/store/selectedLanguages.slice';
import { IMondayClmnArray } from '../../../types';
import TextInput from '../inputs/TextInput';
import TextAreaInput from '../inputs/TextAreaInput';
import EmailInput from '../inputs/EmailInput';
import SelectInput from '../inputs/SelectInput';
import NumberInput from '../inputs/NumberInput';
import PhoneInput from '../inputs/PhoneInput';
import DateInput from '../inputs/DateInput';

function OffersForm({ mondayBoard }: { mondayBoard: any }) {
  const { selectedLanguage } = useSelectedLanguagesFromStore();
  const apiKey = process.env.NEXT_PUBLIC_MONDAY_API_KEY as string;
  const apiUrl = process.env.NEXT_PUBLIC_MONDAY_API_URL as string;
  const [userName, setUserName] = useState('');
  const [userFirstName, setUserFirstName] = useState('');
  const [formStatus, setFormStatus] = useState('inProgress');

  const [formInputs, setFormInputs] = useState<IMondayClmnArray[]>([]);

  useEffect(() => {
    // Créez une copie des colonnes de mondayBoard avec la propriété "value"
    const updatedFormInputs = mondayBoard.columns.map(
      (element: IMondayClmnArray) => ({ ...element, value: '' })
    );

    setFormInputs(updatedFormInputs);

    if (formInputs.length < 0) {
      setFormStatus('error');
    }
  }, []);

  // console.log(mondayBoard.id);

  const handleInputChange = (
    e:
      | ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      | ChangeEvent<HTMLSelectElement>,
    id: string
  ) => {
    const updatedFormInputs = formInputs.map((colmn) => {
      if (colmn.id === id) {
        return { ...colmn, value: e.target.value };
      }
      return colmn;
    });

    setFormInputs(updatedFormInputs);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Supprimez l'élément avec l'id "name" du tableau
    const filteredFormInputs = formInputs.filter(
      (colmn) => colmn.id !== 'name'
    );

    // Utilisez reduce pour créer l'objet souhaité
    const resultObject: Record<string, string> = filteredFormInputs.reduce(
      (acc: any, colmn) => {
        acc[colmn.id] = colmn.value || '';
        return acc;
      },
      {}
    );

    const body = {
      query: `
      mutation ($boardId: Int!, $itemName: String!, $columnValues: JSON!) {
        create_item (
          board_id: $boardId,
          item_name: $itemName,
          column_values: $columnValues
        ) {
          id
        }
      }
      `,
      variables: {
        boardId: parseInt(mondayBoard.id, 10),
        itemName: `${userFirstName} ${userName}`,
        columnValues: JSON.stringify(resultObject),
      },
    };

    try {
      axios
        .post(apiUrl, body, {
          headers: {
            Authorization: apiKey,
          },
        })
        .catch((err) => {
          console.error(err.data);
          setFormStatus('error');
        })
        .then((res) => {
          console.log(res);
          setFormStatus('validate');
        });
    } catch (error) {
      console.error(
        "Erreur lors de la création de l'élément dans Monday.com",
        error
      );
      setFormStatus('error');
    }
  };

  return (
    <div>
      {formStatus === 'validate' && <div>Formulaire validé</div>}
      {formStatus === 'error' && <div>Erreur</div>}
      {formStatus === 'inProgress' && formInputs.length > 0 && (
        <form
          className="w-full  py-20 px-4 lg:px-10t flex flex-col space-y-5"
          onSubmit={handleSubmit}
        >
          <TextInput
            value={userFirstName}
            name={selectedLanguage === 'Fr' ? 'Prénoms' : 'Firstname'}
            onChange={(
              e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
            ) => setUserFirstName(e.target.value)}
          />
          <TextInput
            value={userName}
            name={selectedLanguage === 'Fr' ? 'Noms' : 'LastName'}
            onChange={(
              e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
            ) => setUserName(e.target.value)}
          />

          {formInputs.map((colmn) => (
            <div key={colmn.id}>
              {colmn.type === 'text' &&
                colmn.title.toLowerCase() !== 'email' && (
                  <TextAreaInput
                    value={colmn.value}
                    name={colmn.title}
                    onChange={(
                      e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
                    ) => handleInputChange(e, colmn.id)}
                  />
                )}
              {colmn.type === 'text' &&
                colmn.title.toLowerCase() === 'email' && (
                  <EmailInput
                    value={colmn.value}
                    name={colmn.title}
                    onChange={(
                      e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
                    ) => handleInputChange(e, colmn.id)}
                  />
                )}
              {colmn.type === 'color' && (
                <SelectInput
                  name={colmn.title}
                  options={Object.values(JSON.parse(colmn.settings_str).labels)}
                  onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                    handleInputChange(e, colmn.id)
                  }
                />
              )}
              {colmn.type === 'numeric' && colmn.title !== 'Phone Number' && (
                <NumberInput
                  name={colmn.title}
                  value={colmn.value}
                  onChange={(
                    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
                  ) => handleInputChange(e, colmn.id)}
                />
              )}
              {colmn.type === 'numeric' && colmn.title === 'Phone Number' && (
                <PhoneInput
                  name={colmn.title}
                  value={colmn.value}
                  onChange={(
                    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
                  ) => handleInputChange(e, colmn.id)}
                />
              )}
              {colmn.type === 'date' && (
                <DateInput
                  name={colmn.title}
                  onChange={(e) => handleInputChange(e, colmn.id)}
                />
              )}
            </div>
          ))}

          <button
            className="flex items-center text-background justify-center bg-primary border border-primary px-4 py-3 hover:bg-transparent hover:text-primary transform duration-500  font-bold"
            type="submit"
          >
            {selectedLanguage === 'Fr' ? 'Postuler' : 'Apply'}
          </button>
        </form>
      )}
    </div>
  );
}

export default OffersForm;
